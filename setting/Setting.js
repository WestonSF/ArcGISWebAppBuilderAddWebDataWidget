///////////////////////////////////////////////////////////////////////////
// Copyright © 2015 Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////
define(["dojo/_base/declare",
    "dojo/_base/lang",
    "jimu/BaseWidgetSetting",
    "dijit/_WidgetsInTemplateMixin",
    "dijit/form/CheckBox",
    "dijit/form/NumberTextBox",
    "dijit/form/ValidationTextBox"
  ],
  function(declare, lang, BaseWidgetSetting, _WidgetsInTemplateMixin) {

    return declare([BaseWidgetSetting, _WidgetsInTemplateMixin], {

      baseClass: "jimu-widget-add-web-data-setting",

      postCreate: function() {
        this.inherited(arguments);
      },

      startup: function() {
        if (this._started) {
          return;
        }
        this.inherited(arguments);
        this.setConfig(this.config);
      },

      getConfig: function() {
        this.config = this.config;
        var v = this.numPerBageBox.get("value");
        if (typeof v === "number" && !isNaN(v)) {
          v = Math.floor(v);
          if (v >= 1 && v <= 100) {
            this.config.numPerPage = v;
          }
        }

        var options = this.config.scopeOptions;
        var setOption = function(name, checkBox, textBox) {
          var opt = options[name];
          opt.allow = !!checkBox.get("checked");
          if (textBox) {
            opt.label = null;
            var s = textBox.get("value");
            if (typeof s === "string") {
              s = lang.trim(s);
              if (s.length > 0) {
                opt.label = s;
              }
            }
          }
        };

        // Get the ArcGIS Group ID and tags
        this.config.ArcGISGroupID1 = this.ArcGISGroupIDTextBox1.get('value');
        this.config.ArcGISGroupID2 = this.ArcGISGroupIDTextBox2.get('value');
        this.config.ArcGISGroupID3 = this.ArcGISGroupIDTextBox3.get('value');
        this.config.ArcGISGroupID4 = this.ArcGISGroupIDTextBox4.get('value');
        this.config.ArcGISGroupID5 = this.ArcGISGroupIDTextBox5.get('value');
        this.config.ArcGISGroupID6 = this.ArcGISGroupIDTextBox6.get('value');
        this.config.ArcGISGroupTags1 = this.ArcGISGroupTagsTextBox1.get('value');
        this.config.ArcGISGroupTags2 = this.ArcGISGroupTagsTextBox2.get('value');
        this.config.ArcGISGroupTags3 = this.ArcGISGroupTagsTextBox3.get('value');
        this.config.ArcGISGroupTags4 = this.ArcGISGroupTagsTextBox4.get('value');
        this.config.ArcGISGroupTags5 = this.ArcGISGroupTagsTextBox5.get('value');
        this.config.ArcGISGroupTags6 = this.ArcGISGroupTagsTextBox6.get('value');

        setOption("MyContent", this.MyContentCheckBox, this.MyContentTextBox);
        setOption("ArcGISGroup1", this.ArcGISGroupCheckBox1, this.ArcGISGroupTextBox1);
        setOption("ArcGISGroup2", this.ArcGISGroupCheckBox2, this.ArcGISGroupTextBox2);
        setOption("ArcGISGroup3", this.ArcGISGroupCheckBox3, this.ArcGISGroupTextBox3);
        setOption("ArcGISGroup4", this.ArcGISGroupCheckBox4, this.ArcGISGroupTextBox4);
        setOption("ArcGISGroup5", this.ArcGISGroupCheckBox5, this.ArcGISGroupTextBox5);
        setOption("ArcGISGroup6", this.ArcGISGroupCheckBox6, this.ArcGISGroupTextBox6);
        setOption("MyOrganization", this.MyOrganizationCheckBox, this.MyOrganizationTextBox);
        setOption("ArcGISOnline", this.ArcGISOnlineCheckBox, this.ArcGISOnlineTextBox);

        // Set default selection config
        this.config.defaultOption = this.defaultDropdownSelect.value;

        return this.config;
      },

      setConfig: function(config) {
        this.config = config || {};
        //console.warn("setConfig",this.config);
        var numPer = this.config.numPerPage;
        try {
          var v = Number(numPer);
          if (typeof v === "number" && !isNaN(v)) {
            v = Math.floor(v);
            if (v >= 1 && v <= 100) {
              this.numPerBageBox.set("value", v);
            }
          }
        } catch (ex) {
          console.warn("Error setting number:");
          console.warn(ex);
        }

        if (!config.scopeOptions) {
          config.scopeOptions = {};
        }
        var options = config.scopeOptions;
        var initOption = function(name, checkBox, textBox) {
          var opt = options[name];
          if (!opt) {
            opt = options[name] = {
              allow: true,
              label: null
            };
          }
          if (typeof opt.allow !== "boolean") {
            opt.allow = true;
          }
          checkBox.set("checked", opt.allow);
          if (textBox) {
            if (typeof opt.label === "string") {
              var s = lang.trim(opt.label);
              if (s.length > 0) {
                textBox.set("value", s);
              }
            }
          }
        };

        // Set the ArcGIS Group ID and tags
        this.ArcGISGroupIDTextBox1.set('value', config.ArcGISGroupID1);
        this.ArcGISGroupIDTextBox2.set('value', config.ArcGISGroupID2);
        this.ArcGISGroupIDTextBox3.set('value', config.ArcGISGroupID3);
        this.ArcGISGroupIDTextBox4.set('value', config.ArcGISGroupID4);
        this.ArcGISGroupIDTextBox5.set('value', config.ArcGISGroupID5);
        this.ArcGISGroupIDTextBox6.set('value', config.ArcGISGroupID6);
        this.ArcGISGroupTagsTextBox1.set('value', config.ArcGISGroupTags1);
        this.ArcGISGroupTagsTextBox2.set('value', config.ArcGISGroupTags2);
        this.ArcGISGroupTagsTextBox3.set('value', config.ArcGISGroupTags3);
        this.ArcGISGroupTagsTextBox4.set('value', config.ArcGISGroupTags4);
        this.ArcGISGroupTagsTextBox5.set('value', config.ArcGISGroupTags5);
        this.ArcGISGroupTagsTextBox6.set('value', config.ArcGISGroupTags6);

        initOption("MyContent", this.MyContentCheckBox, this.MyContentTextBox);
        initOption("ArcGISGroup1", this.ArcGISGroupCheckBox1, this.ArcGISGroupTextBox1);
        initOption("ArcGISGroup2", this.ArcGISGroupCheckBox2, this.ArcGISGroupTextBox2);
        initOption("ArcGISGroup3", this.ArcGISGroupCheckBox3, this.ArcGISGroupTextBox3);
        initOption("ArcGISGroup4", this.ArcGISGroupCheckBox4, this.ArcGISGroupTextBox4);
        initOption("ArcGISGroup5", this.ArcGISGroupCheckBox5, this.ArcGISGroupTextBox5);
        initOption("ArcGISGroup6", this.ArcGISGroupCheckBox6, this.ArcGISGroupTextBox6);
        initOption("MyOrganization", this.MyOrganizationCheckBox, this.MyOrganizationTextBox);
        initOption("ArcGISOnline", this.ArcGISOnlineCheckBox, this.ArcGISOnlineTextBox);

        // Load in to default selection drop down
        for (var option in options) {
            if (options[option].allow == true) {
                var option = {
                    value: option,
                    label: option.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1").replace("Arc GIS","ArcGIS")
                };
                this.defaultDropdownSelect.addOption(option);
            }
        }

        // Set the default selection
        this.defaultDropdownSelect.set('value', config.defaultOption);
      }

    });

  });
