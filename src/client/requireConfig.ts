requirejs.config({
    baseUrl: "js",
    paths: {
        "cannon-es": "https://cdn.jsdelivr.net/npm/cannon-es@0.18.0/dist/cannon-es.cjs.min"
    }
});

requirejs(["main"], () => { });
