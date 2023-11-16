module.exports = {
    extends: "builds/base.js",
    include: "builds/autoLevel.js",
    meta: {
        stable_name: "ender3_4.2.7-{{marlin_version}}-base-{{uid}}"
    },
    configuration: {
        enable: [
            ["GRID_MAX_POINTS_X", 5]
        ]
    }
};
