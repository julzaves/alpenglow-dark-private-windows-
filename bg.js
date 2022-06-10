"use strict";

const theme={
	images: {
    "additional_backgrounds": [
      "background-noodles-right-dark.svg",
      "background-noodles-left-dark.svg",
      "background-gradient-dark.svg"
    ]
  },
  properties: {
    "additional_backgrounds_alignment": [
      "right top",
      "left top",
      "right top"
    ],
    additional_backgrounds_tiling: [
      "no-repeat",
      "no-repeat",
      "repeat-x"
    ],
    zap_gradient: "linear-gradient(90deg, #9059FF 0%, #FF4AA2 52.08%, #FFBD4F 100%)"
  },
  colors: {
      frame: "hsla(240, 20%, 98%, 1)",
      toolbar: "hsla(254, 46%, 21%, .96)",
      button_background_active: "hsla(255, 100%, 94%, .24)",
      button_background_hover: "hsla(255, 100%, 94%, .12)",
      icons: "hsla(271, 100%, 77%, 1)",
      icons_attention: "hsla(157, 100%, 66%, 1)",
      toolbar_text: "hsla(255, 100%, 94%, 1)",
      toolbar_vertical_separator: "hsla(271, 100%, 77%, .4)",
      toolbar_field: "hsla(250, 43%, 25%, 1)",
      toolbar_field_focus: "hsla(250, 43%, 25%, .98)",
      toolbar_field_text: "hsla(255, 100%, 94%, 1)",
      toolbar_field_text_focus: "hsla(255, 100%, 94%, 1)",
      toolbar_field_border: "transparent",
      toolbar_field_border_focus: "hsla(265, 100%, 72%, 1)",
      toolbar_field_highlight: "hsla(265, 100%, 72%, .32)",
      toolbar_top_separator: "transparent",
      toolbar_bottom_separator: "hsla(245, 38%, 33%, .96)",
      bookmark_text: "hsla(255, 100%, 94%, 1)",
      tab_text: "hsla(255, 100%, 94%, 1)",
      tab_background_text: "hsla(255, 100%, 94%, 1)",
      tab_background_separator: "hsla(255, 100%, 94%, 1)",
      tab_selected: "rgb(60, 31, 123)",
      tab_line: "hsla(265, 100%, 72%, 1)",
      tab_loading: "hsla(265, 100%, 72%, 1)",
      ntp_background: "#2A2A2E",
      ntp_text: "hsla(255, 100%, 94%, 1)",
      popup: "hsla(250, 43%, 25%, 1)",
      popup_text: "hsla(255, 100%, 94%, 1)",
      popup_border: "hsla(255, 100%, 94%, .32)",
      popup_highlight: "hsla(255, 100%, 94%, .12)",
      popup_highlight_text: "hsla(0, 0%, 100%, 1)",
      sidebar: "hsla(250, 43%, 25%, 1)",
      sidebar_text: "hsla(255, 100%, 94%, 1)",
      sidebar_border: "hsla(255, 100%, 94%, .24)",
      sidebar_highlight: "hsla(259, 76%, 58%, 1)",
      sidebar_highlight_text: "hsla(0, 0%, 100%, 1)",
      focus_outline: "hsla(265, 100%, 72%, 1)"
    }
};

function updateTheme(win){
	if(win.incognito){
		browser.theme.update(win.id,theme);
	}
}

browser.windows.onCreated.addListener(updateTheme);