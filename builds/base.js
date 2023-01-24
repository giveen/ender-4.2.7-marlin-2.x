module.exports = {
    extends: "builds/base.js", // <--
    meta: {
        stable_name: "ender_3_4.2.7-{{marlin_version}}-manual_mesh_5x5-{{uid}}",
        nightly_name: "ender_3_4.2.7-{{current_date}}-manual_mesh_5x5-{{uid}}"
    },
    configuration: {
        enable: [
            "PROBE_MANUALLY",
            ["NOZZLE_TO_PROBE_OFFSET", [0, 0, 0]],
            "MESH_BED_LEVELING",
            "RESTORE_LEVELING_AFTER_G28",
            "LCD_BED_LEVELING",
            "MESH_EDIT_MENU",
            ["GRID_MAX_POINTS_X", 5]
        ]
    }
};
