import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {  initReactI18next } from "react-i18next";


i18next.use(LanguageDetector).use(initReactI18next).init({
      lng: "en",
      debug: true,
      fallbackLng: "en",
      resources :{
            en : {
                  translation :{
                        "props": "Props",
                        "css" : "CSS",
                        "palette": "Palette",
                        "test": "test",
                        "searchCss": "search css",
                        "searchProps": "search props",
                        "true": "true",
                        "false": "false",
                        "enterValue" : "Enter Value",
                        "selectComponent": "Select Component",
                        "english": "english",
                        "japnese": "japnese",
                        "mode": "mode",
                        "common": "common",
                        "primary": "primary",
                        "secondary": "secondary",
                        "error": "error",
                        "warning": "warning",
                        "info": "info",
                        "success": "success",
                        "text": "text",
                        "divider": "divider",
                        "background": "background",
                        "action": "action",
                        "generateTheme": "Generate Theme",
                        "black": "black",
                        "white": "white",
                        "main": "main",
                        "light": "light",
                        "dark": "dark",
                        "contrastText": "contrastText",
                        "paper": "paper",
                        "default": "default",
                        "active": "active",
                        "hover": "hover",
                        "hoverOpacity": "hoverOpacity",
                        "selected": "selected",
                        "selectedOpacity": "selectedOpacity",
                        "disabled": "disabled",
                        "disabledBackground": "disabledBackground",
                        "disabledOpacity": "disbaledOpacity",
                        "focus": "focus",
                        "focusOpacity": "focusOpacity",
                        "activatedOpacity": "activatedOpacity",
                        "theme": "theme"
                  }
            },
            ja : {
                  translation : {
                        "props": "小道具",
                        "css": "パレット",
                        "palette" : "スタイル",
                        "test": "テスト",
                        "searchCss" : "検索CSS",
                        "searchProps": "小道具を検索",
                        "true": "真実",
                        "false": "間違い",
                        "enterValue": "値を入力してください",
                        "selectComponent": "コンポーネントを選択",
                        "english": "英語",
                        "japnese": "日本語",
                        "mode": "モード",
                        "common": "一般",
                        "primary": "主要な",
                        "secondary": "二次的",
                        "error": "エラー",
                        "warning": "警告",
                        "info": "情報",
                        "success": "成功",
                        "text": "文章",
                        "divider": "ディバイダー",
                        "background": "背景",
                        "action": "アクション",
                        "generateTheme": "テーマを生成する",
                        "black": "黒",
                        "white": "白",
                        "main": "主要",
                        "light": "ライト",
                        "dark": "暗い",
                        "contrastText": "コントラストテキスト",
                        "paper": "紙",
                        "default": "デフォルト",
                        "active": "アクティブ",
                        "hover": "ホバリング",
                        "hoverOpacity": "ホバー不透明度",
                        "selected": "選択された",
                        "selectedOpacity": "選択された不透明度",
                        "disabled": "無効",
                        "disabledBackground": "無効化された背景",
                        "disabledOpacity": "無効不透明度",
                        "focus": "集中",
                        "focusOpacity": "フォーカス不透明度",
                        "activatedOpacity": "アクティブ化された不透明度",
                        "theme": "テーマ"




                  }
            }
      }
})
