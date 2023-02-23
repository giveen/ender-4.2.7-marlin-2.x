module.exports = {
    extends: "builds/base.js",
    extends: "builds/autoLevel5x5.js",
    meta: {
        stable_name: "ender_3_4.2.7-{{marlin_version}}-cr_level_5x5-{{uid}}",
        nightly_name: "ender_3_4.2.7-{{current_date}}-cr_level_5x5-{{uid}}"
    },
    configuration: {
        enable: [
            "BED_TRAMMING_INCLUDE_CENTER",
            "S_CURVE_ACCELERATION",
            "INDIVIDUAL_AXIS_HOMING_MENU",
            ["DEFAULT_MAX_FEEDRATE", [500, 500, 20, 5]],
            ["HOMING_FEEDRATE_MM_M", [(30*60), (30*60), (6*60)]]
        ],
        disable: [
        ]
    },
    configuration_adv: {
        enable: [
            "HOST_ACTION_COMMANDS",
            "EXTENDED_CAPABILITIES_REPORT",
            "REPORT_FAN_CHANGE",
            "GCODE_CASE_INSENSITIVE",
            "BINARY_FILE_TRANSFER"
        ],
        disable: [      
        ]
    }
};
