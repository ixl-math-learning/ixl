#!/usr/bin/env python3
import subprocess
import os
import sys

def execute_commands():
    """Execute the required commands: cd /home and python hehehe.py"""
    
    print("=== Command Executor ===")
    
    try:
        # Change to /home directory
        print("1. Changing to /home directory...")
        os.chdir('/home')
        print(f"   Current directory: {os.getcwd()}")
        
        # Check if hehehe.py exists
        if not os.path.exists('hehehe.py'):
            print("2. hehehe.py not found, creating a sample script...")
            create_sample_script()
        else:
            print("2. Found hehehe.py")
        
        # Execute python hehehe.py
        print("3. Executing: python hehehe.py")
        print("-" * 40)
        
        result = subprocess.run(['python3', 'hehehe.py'], 
                              capture_output=False, 
                              text=True)
        
        print("-" * 40)
        if result.returncode == 0:
            print("✓ Script executed successfully!")
        else:
            print(f"✗ Script execution failed with return code: {result.returncode}")
            
    except FileNotFoundError as e:
        print(f"Error: {e}")
        print("Make sure Python is installed and hehehe.py exists in /home")
    except PermissionError as e:
        print(f"Permission error: {e}")
    except Exception as e:
        print(f"Unexpected error: {e}")

def create_sample_script():
    """Create a sample hehehe.py script in /home"""
    script_content = '''#!/usr/bin/env python3

print("🎉 Hello from hehehe.py!")
print("=" * 50)
print("This is a sample script running in your container.")

import os
import sys
import platform

print(f"📁 Current directory: {os.getcwd()}")
print(f"🐍 Python version: {sys.version}")
print(f"💻 Platform: {platform.platform()}")
print(f"👤 User: {os.getenv('USER', 'unknown')}")

# Simple calculation
numbers = [1, 2, 3, 4, 5]
total = sum(numbers)
print(f"🔢 Sum of {numbers} = {total}")

print("=" * 50)
print("✨ hehehe.py executed successfully! ✨")
'''
    
    try:
        with open('/home/hehehe.py', 'w') as f:
            f.write(script_content)
        
        # Make it executable
        os.chmod('/home/hehehe.py', 0o755)
        print("✓ Created sample hehehe.py script in /home")
        
    except Exception as e:
        print(f"✗ Error creating script: {e}")

def open_terminal_and_execute():
    """Alternative: Open a terminal and execute commands"""
    print("=== Opening Terminal Method ===")
    
    try:
        # Create a bash script that will run in terminal
        bash_script = '''#!/bin/bash
echo "=== Terminal Execution ==="
echo "Changing to /home directory..."
cd /home
pwd
echo "Running python hehehe.py..."
python3 hehehe.py
echo "=== Execution Complete ==="
read -p "Press Enter to continue..."
'''
        
        # Write the bash script
        with open('/tmp/run_commands.sh', 'w') as f:
            f.write(bash_script)
        os.chmod('/tmp/run_commands.sh', 0o755)
        
        # Try to open terminal (if in GUI environment)
        try:
            subprocess.run(['lxterminal', '-e', '/tmp/run_commands.sh'])
        except FileNotFoundError:
            # Fallback to xterm if lxterminal not available
            try:
                subprocess.run(['xterm', '-e', '/tmp/run_commands.sh'])
            except FileNotFoundError:
                print("No terminal emulator found. Running commands directly...")
                subprocess.run(['bash', '/tmp/run_commands.sh'])
                
    except Exception as e:
        print(f"Error opening terminal: {e}")

def main():
    print("=== Auto Terminal Executor ===")
    print("Opening terminal and executing commands automatically...")
    
    # First ensure hehehe.py exists
    if not os.path.exists('/home/hehehe.py'):
        print("Creating hehehe.py script first...")
        os.chdir('/home')
        create_sample_script()
    
    # Automatically execute in terminal
    open_terminal_and_execute()

if __name__ == "__main__":
    main()
