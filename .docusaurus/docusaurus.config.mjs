/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
export default {
  "title": "sToolbox",
  "tagline": "powered by Goldeimer",
  "url": "http://www.stoolbox.de",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "goldeimer",
  "projectName": "stoolbox",
  "i18n": {
    "defaultLocale": "de",
    "locales": [
      "de",
      "ls",
      "en",
      "es",
      "fr"
    ],
    "path": "i18n",
    "localeConfigs": {
      "de": {
        "label": "Deutsch",
        "direction": "ltr",
        "htmlLang": "de-DE",
        "calendar": "gregory",
        "path": "de"
      },
      "ls": {
        "label": "Deutsch (Leichte Sprache)",
        "direction": "ltr",
        "htmlLang": "de-DE",
        "calendar": "gregory",
        "path": "ls"
      },
      "en": {
        "label": "English",
        "direction": "ltr",
        "htmlLang": "en-US",
        "calendar": "gregory",
        "path": "en"
      },
      "es": {
        "label": "Español",
        "direction": "ltr",
        "calendar": "gregory",
        "path": "es"
      },
      "fr": {
        "label": "Français",
        "direction": "ltr",
        "calendar": "gregory",
        "path": "fr"
      }
    }
  },
  "scripts": [
    {
      "src": "https://cdn.userway.org/widget.js\" data-account=\"XJKGmFikiv\"",
      "async": true
    }
  ],
  "presets": [
    [
      "classic",
      {
        "docs": {
          "sidebarPath": "/Users/frederikgottemeyer/Sites/sToolbox/sidebars.js",
          "editUrl": "https://github.com/goldeimer/stoolbox"
        },
        "theme": {
          "customCss": "/Users/frederikgottemeyer/Sites/sToolbox/src/css/custom.css"
        }
      }
    ]
  ],
  "plugins": [
    "docusaurus-plugin-matomo"
  ],
  "themeConfig": {
    "announcementBar": {
      "id": "support_us",
      "content": "Wir wollen eine DIY Trockenklo Community Plattform aufbauen, hilf uns dabei!",
      "backgroundColor": "#fafbfc",
      "textColor": "#091E42",
      "isCloseable": false
    },
    "navbar": {
      "title": "sToolbox",
      "logo": {
        "alt": "sToolbox Logo",
        "src": "/img/goldeimer-logo.png",
        "width": "100px"
      },
      "items": [
        {
          "type": "doc",
          "docId": "basics/basics",
          "position": "left",
          "label": "Tutorial"
        },
        {
          "to": "/donation/",
          "label": "Spenden",
          "position": "left"
        },
        {
          "to": "https://goldeimer.de/pages/kontakt",
          "label": "Kontakt",
          "position": "left"
        },
        {
          "type": "localeDropdown",
          "position": "right",
          "dropdownItemsBefore": [],
          "dropdownItemsAfter": []
        },
        {
          "href": "https://github.com/goldeimer/stoolbox",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": true,
      "respectPrefersColorScheme": false
    },
    "matomo": {
      "matomoUrl": "https://goldi.uber.space/matomo/",
      "siteId": "3",
      "phpLoader": "matomo.php",
      "jsLoader": "matomo.js"
    },
    "algolia": {
      "appId": "3FO82CSW7H",
      "apiKey": "63051697c699d185c5cadfd9e564ed33",
      "indexName": "stoolbox-goldeimer",
      "contextualSearch": true,
      "externalUrlRegex": "external\\.com|domain\\.com",
      "replaceSearchResultPathname": {
        "from": "/docs/",
        "to": "/"
      },
      "searchParameters": {},
      "searchPagePath": "search"
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Basics",
              "to": "docs/category/basics"
            }
          ]
        },
        {
          "title": "Informationen",
          "items": [
            {
              "label": "Impressum",
              "to": "https://goldeimer.de/policies/legal-notice"
            },
            {
              "label": "Datenschutzerklärung",
              "href": "https://goldeimer.de/policies/privacy-policy"
            },
            {
              "label": "Kontakt",
              "href": "https://goldeimer.de/pages/kontakt"
            }
          ]
        },
        {
          "title": "Powered by",
          "items": [
            {
              "html": "\n\t\t<a href=\"https://goldeimer.com\" target=\"_blank\" rel=\"noreferrer noopener\" aria-label=\"Goldeimer gGmbH Logo\">\n\t\t  <img src=\"/img/goldeimer_logo.png\" alt=\"Goldeimer gGmbH Logo\" width=\"200px\"/>\n\t\t</a>\n\t      "
            }
          ]
        },
        {
          "title": "Gefördert durch",
          "items": [
            {
              "html": "\n\t\t<a href=\"https://www.deutsche-stiftung-engagement-und-ehrenamt.de/\" target=\"_blank\" rel=\"noreferrer noopener\" aria-label=\"Deutsche-Stiftung-Engagement-und-Ehrenamt Logo\">\n\t\t  <img src=\"/img/dsee_logo.png\" alt=\"Deutsche-Stiftung-Engagement-und-Ehrenamt Logo\" width=\"200px\" />\n\t\t</a>\n\t      "
            }
          ]
        }
      ],
      "copyright": "sToolbox © 2023 powered by Goldeimer gGmbH"
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": [],
      "magicComments": [
        {
          "className": "theme-code-block-highlighted-line",
          "line": "highlight-next-line",
          "block": {
            "start": "highlight-start",
            "end": "highlight-end"
          }
        }
      ]
    },
    "docs": {
      "versionPersistence": "localStorage",
      "sidebar": {
        "hideable": false,
        "autoCollapseCategories": false
      }
    },
    "metadata": [],
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "baseUrlIssueBanner": true,
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "themes": [],
  "headTags": [],
  "stylesheets": [],
  "clientModules": [],
  "titleDelimiter": "|",
  "noIndex": false,
  "markdown": {
    "mermaid": false
  }
};
