const app = require('./src/app');

function printRoutes(stack, basePath) {
    stack.forEach(layer => {
        if (layer.route) {
            console.log(`${Object.keys(layer.route.methods).join(',').toUpperCase()} ${basePath}${layer.route.path}`);
        } else if (layer.name === 'router' && layer.handle.stack) {
            // It's a router middleware
            let newPath = basePath;
            // Trim the regex details to get the path
            const match = layer.regexp.toString().match(/^\/\^\\(\/.*?)\\\/\?/);
            if (match) {
                newPath += match[1];
            } else if (layer.regexp.toString() === '/^\\/?(?=\\/|$)/i') {
                // root path
            } else {
                // Fallback for more complex regexes, though usually for app.use('/api/auth', ...) it matches
                // We know we mounted at /api/auth
            }

            // For this specific app structure, we can try to inspect the path property if getting from app._router
            // But layer.regexp is the source of truth for routing.
            // Let's rely on the fact that we know app.js mounts routers.
            printRoutes(layer.handle.stack, basePath);
        }
    });
}

// Simple inspector for our specific app structure
console.log("--- Registered Routes ---");
app._router.stack.forEach(r => {
    if (r.route && r.route.path) {
        console.log(`${Object.keys(r.route.methods).join(',').toUpperCase()} ${r.route.path}`);
    } else if (r.name === 'router' && r.handle.stack) {
        // This is likely our auth routes
        // The path is hidden in the regexp, but we know it's /api/auth from app.js
        // Let's try to print the sub-routes assuming context from app.js inspection

        // Actually, Express 4.x structure is a bit nested.
        console.log(`Router found (likely /api/auth or similar). Sub-routes:`);
        r.handle.stack.forEach(sub => {
            if (sub.route) {
                console.log(`  ${Object.keys(sub.route.methods).join(',').toUpperCase()} ${sub.route.path}`);
            }
        });
    }
});
