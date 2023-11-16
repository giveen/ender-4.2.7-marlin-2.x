module.exports = {
    extends: "builds/default.js",
    meta: {
        stable_name: "ender_3_4.2.7-{{marlin_version}}-base-{{uid}}"
    },
    configuration: {
        enable: [
            ["STRING_CONFIG_H_AUTHOR", "(Dust, valerionew, Ender-3, zisismaras, giveen)"],
            "LCD_BED_TRAMMING",
            "NOZZLE_PARK_FEATURE"
        ]
    },
    configuration_adv: {
        enable: [
            //octoprint
            "HOST_ACTION_COMMANDS",
            "EMERGENCY_PARSER",
            "ADVANCED_PAUSE_FEATURE"
        ]
    }
};
