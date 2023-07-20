// builds/manualBedMesh5x5.js
module.exports = {
    extends: "builds/base.js", //we can extend and include at the same time
    extends: "builds/manualBedMesh5x5.js",// <--
    meta: {
        stable_name: "ender_3_4.2.7-{{marlin_version}}-octo-manual_mesh_5x5-{{uid}}"
    },
    configuration: {
        enable: [
            ["GRID_MAX_POINTS_X", 5], // only the grid size is defined here
         ],
    },
    configuration_adv: {
        enable: [
            "SOUND_MENU_ITEM",
            "HOST_ACTION_COMMANDS",
            "AUTO_REPORT_TEMPERATURES",
            "AUTO_REPORT_POSITION",
            "M114_DETAIL",
            "M114_REALTIME",
            "EXTENDED_CAPABILITIES_REPORT",
            "REPORT_FAN_CHANGE",
            "GCODE_CASE_INSENSITIVE",
            "HOST_PROMPT_SUPPORT",
            "HOST_START_MENU_ITEM"
        ]
    }
};
