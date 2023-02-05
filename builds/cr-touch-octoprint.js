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
            "SOUND_MENU_ITEM",
            "HOST_ACTION_COMMANDS",
            "AUTO_REPORT_TEMPERATURES",
            "AUTO_REPORT_POSITION",
            "M114_DETAIL",
            "M114_REALTIME",
            "EXTENDED_CAPABILITIES_REPORT",
            "REPORT_FAN_CHANGE",
            "GCODE_CASE_INSENSITIVE",
            "BLTOUCH_LCD_VOLTAGE_MENU"
        ],
        disable: [
            "BLTOUCH_HS_MODE",
            "BLTOUCH_FORCE_SW_MODE",
            "BLTOUCH_SET_5V_MODE",
            
        ]
    }
};
