// Copyright (c) 2018-2019 Claudio Guarnieri.
//
// This file is part of PhishDetect.
//
// PhishDetect is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// PhishDetect is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with PhishDetect.  If not, see <https://www.gnu.org/licenses/>.

function loadOptions() {
    $("#server").val(cfg.getNode());
    $("#webmails").prop("checked", cfg.getWebmails());

    var report = cfg.getReport();
    $("#report").prop("checked", cfg.getReport());
    $("#contact").val(cfg.getContact());
    if (report) {
        $("#contactLabel").removeClass("text-grey");
        $("#contact").prop("disabled", false);
    } else {
        $("#contactLabel").addClass("text-grey");
        $("#contact").prop("disabled", true);
    }

    $("#key").val(cfg.getApiKey());
    if (!cfg.getNodeEnforceUserAuth()) {
        $("#keySection").hide();
    }
}

function saveOptions(event) {
    event.preventDefault();
    var node = $("#server").val().trim();
    if (node != "") {
        cfg.setNode(node);
    }
    var key = $("#key").val().trim();
    if (key != "") {
        cfg.setApiKey(key);
    }
    var contact = $("#contact").val().trim();
    if (contact != "") {
        cfg.setContact(contact);
    }
    cfg.setReport($("#report").is(":checked"));
    cfg.setWebmails($("#webmails").is(":checked"));

    $("#container").empty().append(
        $("<div class=\"text-center\">")
            .append($("<i class=\"fas fa-check-circle text-5xl text-green\">"))
            .append($("<div class=\"mt-4\">")
                .text(chrome.i18n.getMessage("optionsSaved"))
            )
    );
}

function restoreDefaults() {
    $("#server").val(NODE_DEFAULT_URL);
    $("#key").val("");
    $("#webmails").prop("checked", true);
    $("#report").prop("checked", true);
    $("#contact").val("");
}

document.addEventListener("DOMContentLoaded", loadOptions);
$("form").submit(saveOptions);
$("#restoreDefaults").click(restoreDefaults);

$("#report").change(function() {
    if (this.checked) {
        $("#contactLabel").removeClass("text-grey");
        $("#contact").prop("disabled", false);
    } else {
        $("#contactLabel").addClass("text-grey");
        $("#contact").prop("disabled", true);
    }
});
