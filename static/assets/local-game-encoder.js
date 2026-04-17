const LocalGameEncoder = {
    prefix: '/reading/',

    pathMappings: {
        'local games': 'documents',
        'games': 'books',
        'game': 'book',
        'play': 'study',
        'index.html': 'content.html'
    },

    disguisePath(url) {
        let disguised = url;
        for (let [original, replacement] of Object.entries(this.pathMappings)) {
            disguised = disguised.replace(new RegExp(original, 'gi'), replacement);
        }
        return disguised;
    },

    undisguisePath(disguised) {
        let original = disguised;
        for (let [originalWord, replacement] of Object.entries(this.pathMappings)) {
            original = original.replace(new RegExp(replacement, 'gi'), originalWord);
        }
        return original;
    },

    encode(url) {
        const disguised = this.disguisePath(url);

        const base64 = btoa(disguised);

        return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    },

    decode(encoded) {
        try {

            let base64 = encoded.replace(/-/g, '+').replace(/_/g, '/');
            while (base64.length % 4) {
                base64 += '=';
            }
            const disguised = atob(base64);
            return this.undisguisePath(disguised);
        } catch (e) {
            throw new Error('Invalid encoded path');
        }
    },

    createEncodedLink(localPath) {
        return this.prefix + this.encode(localPath);
    }
};

window.LocalGameEncoder = LocalGameEncoder;
