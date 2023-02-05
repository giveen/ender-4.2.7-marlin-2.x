module.exports = {
    extends: "builds/base.js",
    extends: "builds/autoLevel5x5.js",
    meta: {
        stable_name: "ender_3_4.2.7-{{marlin_version}}-cr_level_5x5-{{uid}}",
        nightly_name: "ender_3_4.2.7-{{current_date}}-cr_level_5x5-{{uid}}"
    },
    configuration: {
        enable: [
        ],
        disable: [
        ]
    },
    configuration_adv: {
        enable: [
            "HOST_ACTION_COMMANDS",
            "EXTENDED_CAPABILITIES_REPORT",
            "REPORT_FAN_CHANGE",
            "GCODE_CASE_INSENSITIVE"
        ],
        disable: [      
        ]
    }
};
