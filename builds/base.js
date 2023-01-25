module.exports = {
    extends: "builds/default.js",
    meta: {
        stable_name: "ender_3_4.2.7-{{marlin_version}}-base-{{uid}}",
        nightly_name: "ender_3_4.2.7-{{current_date}}-base-{{uid}}"
    },
    configuration: {
        enable: [
            ["STRING_CONFIG_H_AUTHOR", "(Dust, valerionew, Ender-3, zisismaras, giveen)"],
            //standard leveling menu helper
            "LCD_BED_TRAMMING",
            "BED_TRAMMING_INCLUDE_CENTER",
            "S_CURVE_ACCELERATION",
            "INDIVIDUAL_AXIS_HOMING_MENU",
            ["DEFAULT_MAX_FEEDRATE", [500, 500, 20]]
        ]
    },
    configuration_adv: {
        enable: [
            //octoprint
            "HOST_ACTION_COMMANDS"
        ]
        disable: [
        "ARC_SUPPORT"
        ]
    }
};
