module.exports = {
    extends: "builds/base.js",
    extends: "builds/autoLevel5x5.js",
    meta: {
        stable_name: "ender_3_4.2.7-{{marlin_version}}-cr_level_5x5-{{uid}}",
        nightly_name: "ender_3_4.2.7-{{current_date}}-cr_level_5x5-{{uid}}"
    },
    configuration: {
        enable: [
            "BLTOUCH",
            "AUTO_BED_LEVELING_BILINEAR",
            "Z_SAFE_HOMING",
            "USE_PROBE_FOR_Z_HOMING",
            ["Z_MIN_PROBE_PIN", q`PB1`],
            "LCD_BED_LEVELING",

            ["DEFAULT_LEVELING_FADE_HEIGHT", 20],
            ["NOZZLE_TO_PROBE_OFFSET", [0, 0, 0]],

            //M48 test
            "Z_MIN_PROBE_REPEATABILITY_TEST"
        ],
        disable: [
            "Z_MIN_PROBE_USES_Z_MIN_ENDSTOP_PIN"
        ]
    },
    configuration_adv: {
        enable: [
            "BABYSTEPPING",
            "BABYSTEP_ZPROBE_OFFSET",
            "PROBE_OFFSET_WIZARD",
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
            "HOST_START_MENU_ITEM",
            //symmetrical
            ["PROBING_MARGIN_LEFT", 45],
            ["PROBING_MARGIN_RIGHT", 45],
            ["PROBING_MARGIN_FRONT", 15],
            ["PROBING_MARGIN_BACK", 15],
            "BLTOUCH_LCD_VOLTAGE_MENU"
        ],
        disable: [
            "BLTOUCH_HS_MODE",
            "BLTOUCH_FORCE_SW_MODE",
            "BLTOUCH_SET_5V_MODE",
            
        ]
    }
};
