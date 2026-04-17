#!/usr/bin/env python3
"""
Screen Dimensions Calculator for dorowu/ubuntu-desktop-lxde-vnc
This script calculates and displays the current screen dimensions.
"""

import subprocess
import sys
import os

def get_screen_dimensions_xrandr():
    """Get screen dimensions using xrandr command."""
    try:
        result = subprocess.run(['xrandr'], capture_output=True, text=True, check=True)
        lines = result.stdout.split('\n')
        
        for line in lines:
            if ' connected ' in line and 'primary' in line:
                # Parse primary display line
                parts = line.split()
                for part in parts:
                    if 'x' in part and '+' in part:
                        resolution = part.split('+')[0]
                        width, height = resolution.split('x')
                        return int(width), int(height)
            elif ' connected ' in line:
                # Parse any connected display
                parts = line.split()
                for part in parts:
                    if 'x' in part and ('+' in part or part.replace('x', '').replace('x', '').replace('+', '').isdigit()):
                        resolution = part.split('+')[0]
                        if 'x' in resolution:
                            try:
                                width, height = resolution.split('x')
                                return int(width), int(height)
                            except ValueError:
                                continue
        return None
    except (subprocess.CalledProcessError, FileNotFoundError):
        return None

def get_screen_dimensions_xdpyinfo():
    """Get screen dimensions using xdpyinfo command."""
    try:
        result = subprocess.run(['xdpyinfo'], capture_output=True, text=True, check=True)
        lines = result.stdout.split('\n')
        
        for line in lines:
            if 'dimensions:' in line:
                # Line format: "  dimensions:    1024x768 pixels (270x203 millimeters)"
                parts = line.split()
                for part in parts:
                    if 'x' in part and 'pixels' not in part:
                        width, height = part.split('x')
                        return int(width), int(height)
        return None
    except (subprocess.CalledProcessError, FileNotFoundError):
        return None

def get_screen_dimensions_tkinter():
    """Get screen dimensions using tkinter."""
    try:
        import tkinter as tk
        root = tk.Tk()
        root.withdraw()  # Hide the window
        
        width = root.winfo_screenwidth()
        height = root.winfo_screenheight()
        
        root.destroy()
        return width, height
    except ImportError:
        return None
    except Exception:
        return None

def get_screen_dimensions_env():
    """Get screen dimensions from environment variables if available."""
    try:
        width = os.environ.get('SCREEN_WIDTH')
        height = os.environ.get('SCREEN_HEIGHT')
        
        if width and height:
            return int(width), int(height)
        return None
    except ValueError:
        return None

def format_dimensions(width, height):
    """Format dimensions for display."""
    aspect_ratio = width / height
    
    # Common aspect ratios
    common_ratios = {
        (16, 9): "16:9",
        (16, 10): "16:10", 
        (4, 3): "4:3",
        (5, 4): "5:4",
        (3, 2): "3:2"
    }
    
    ratio_str = None
    for (w_ratio, h_ratio), name in common_ratios.items():
        if abs(aspect_ratio - (w_ratio / h_ratio)) < 0.01:
            ratio_str = name
            break
    
    if not ratio_str:
        ratio_str = f"{aspect_ratio:.2f}:1"
    
    return {
        'width': width,
        'height': height,
        'aspect_ratio': ratio_str,
        'total_pixels': width * height,
        'diagonal_pixels': int((width**2 + height**2)**0.5)
    }

def main():
    """Main function to detect and display screen dimensions."""
    print("Screen Dimensions Calculator")
    print("=" * 40)
    
    # Check if we're in a display environment
    display = os.environ.get('DISPLAY')
    if not display:
        print("Warning: No DISPLAY environment variable found.")
        print("Make sure you're running this in a graphical environment.")
        print()
    
    # Try different methods to get screen dimensions
    methods = [
        ("xrandr", get_screen_dimensions_xrandr),
        ("xdpyinfo", get_screen_dimensions_xdpyinfo),
        ("tkinter", get_screen_dimensions_tkinter),
        ("environment variables", get_screen_dimensions_env)
    ]
    
    dimensions = None
    method_used = None
    
    for method_name, method_func in methods:
        print(f"Trying {method_name}...", end=" ")
        try:
            result = method_func()
            if result:
                dimensions = result
                method_used = method_name
                print("✓ Success")
                break
            else:
                print("✗ No result")
        except Exception as e:
            print(f"✗ Error: {e}")
    
    print()
    
    if dimensions:
        width, height = dimensions
        info = format_dimensions(width, height)
        
        print("Screen Dimensions Found!")
        print("-" * 25)
        print(f"Method used: {method_used}")
        print(f"Resolution: {info['width']} x {info['height']} pixels")
        print(f"Aspect Ratio: {info['aspect_ratio']}")
        print(f"Total Pixels: {info['total_pixels']:,}")
        print(f"Diagonal: {info['diagonal_pixels']} pixels")
        
        # Additional display info
        print(f"Display: {display if display else 'Not set'}")
        
        # Calculate some common display densities (assuming standard sizes)
        common_sizes = {
            "24 inch monitor": 24,
            "27 inch monitor": 27,
            "32 inch monitor": 32,
        }
        
        print("\nEstimated DPI for common screen sizes:")
        for size_name, diagonal_inches in common_sizes.items():
            dpi = info['diagonal_pixels'] / diagonal_inches
            print(f"  {size_name}: {dpi:.0f} DPI")
            
    else:
        print("❌ Could not determine screen dimensions!")
        print("\nTroubleshooting:")
        print("1. Make sure you're running this in the VNC session")
        print("2. Ensure X11 is running properly")
        print("3. Try running: export DISPLAY=:1")
        print("4. Check if xrandr or xdpyinfo are installed")
        return 1
    
    return 0

if __name__ == "__main__":
    exit(main())
