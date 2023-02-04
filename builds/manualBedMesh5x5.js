// builds/manualBedMesh5x5.js
module.exports = {
    partial: true,
    extends: "builds/base/base.js", //we can extend and include at the same time
    include: "builds/features/manualBedMesh.js", // <--
    meta: {
        stable_name: "ender_3_4.2.7-{{marlin_version}}-manual_mesh_5x5-{{uid}}",
        nightly_name: "ender_3_4.2.7-{{current_date}}-manual_mesh_5x5-{{uid}}"
    },
    configuration: {
        enable: [
            ["GRID_MAX_POINTS_X", 5] // only the grid size is defined here
        ]
    }
};
