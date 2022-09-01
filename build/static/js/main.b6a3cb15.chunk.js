(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    12: function (e, t, a) {
      e.exports = {
        "navbar-brand": "Home_navbar-brand__3CgT-",
        "nav-link": "Home_nav-link__26yho",
        navbar: "Home_navbar__1f9v-",
        container: "Home_container__1_tkO",
        "top-nav-div": "Home_top-nav-div__FAk9i",
        "top-nav-link": "Home_top-nav-link__3B0BZ",
        active: "Home_active__3LrgE",
        side_nav: "Home_side_nav__TKlLO",
        nav_menu: "Home_nav_menu__2pQUB",
        nav_item: "Home_nav_item__30BHk",
        menu_text: "Home_menu_text__3uulp",
        align_center: "Home_align_center__1zx4A",
        notificationNumber: "Home_notificationNumber__2WXZu",
        notification: "Home_notification__3M0lo",
      };
    },
    129: function (e, t, a) {},
    13: function (e, t, a) {
      e.exports = {
        modal_lg: "SlotStatus_modal_lg__1OHda",
        next: "SlotStatus_next__11Z0v",
        submissionPanel: "SlotStatus_submissionPanel__1xPpO",
        formStyle: "SlotStatus_formStyle__10ESR",
        SSDate: "SlotStatus_SSDate__3MSKt",
        pay: "SlotStatus_pay__13hhf",
        SSTime: "SlotStatus_SSTime__2wuFX",
        footer: "SlotStatus_footer__rbglr",
        header: "SlotStatus_header__26w0W",
        addSingleUser: "SlotStatus_addSingleUser__1ASUq",
        SSSearch: "SlotStatus_SSSearch__IdJ4l",
      };
    },
    139: function (e, t, a) {},
    145: function (e, t, a) {},
    16: function (e, t, a) {
      e.exports = {
        layout: "NewHotelForm_layout__AdYUA",
        next: "NewHotelForm_next__338kP",
        previewImage: "NewHotelForm_previewImage__1RczM",
      };
    },
    22: function (e, t, a) {
      e.exports = {
        panel: "UserDetails_panel__3zUc8",
        isVerified: "UserDetails_isVerified__BGOaT",
      };
    },
    36: function (e, t, a) {
      e.exports = {
        panel: "GroupMembers_panel__nFyo6",
        total: "GroupMembers_total__2pa25",
      };
    },
    37: function (e, t, a) {
      e.exports = {
        singlebar: "SingleClient_singlebar__bAAHD",
        icon: "SingleClient_icon__3hfgT",
        outletList: "SingleClient_outletList__ffBQC",
        outlet: "SingleClient_outlet__1vvjm",
      };
    },
    38: function (e, t, a) {
      e.exports = {
        panel: "Client_panel__2QJEq",
        headingbar: "Client_headingbar__sOKz0",
      };
    },
    39: function (e, t, a) {
      e.exports = { panel: "Users_panel__1Lnqb", total: "Users_total__3Af05" };
    },
    40: function (e, t, a) {
      e.exports = {
        panel: "NewCustomNotificationForm_panel__1W0Le",
        formStyle: "NewCustomNotificationForm_formStyle__36qY-",
        CNFDateInput: "NewCustomNotificationForm_CNFDateInput__JAnO1",
        pay: "NewCustomNotificationForm_pay__14C_J",
        CNFEndTime: "NewCustomNotificationForm_CNFEndTime__zxLNy",
        footer: "NewCustomNotificationForm_footer__3AUP8",
        header: "NewCustomNotificationForm_header__IdY7F",
      };
    },
    412: function (e, t, a) {
      e.exports = a.p + "static/media/logo.fbfa77a9.jpg";
    },
    413: function (e, t, a) {
      "use strict";
      a.r(t);
      a(87);
      var n = a(21),
        l = a(0),
        r = a.n(l),
        c = a(35),
        o = a.n(c),
        m = a(2),
        s = a(48),
        i = a.n(s),
        u = (a(51), a(3)),
        d = a.n(u),
        p = a(4),
        E = a(13),
        f = a.n(E),
        b = function (e) {
          var t = Object(l.useState)([]),
            a = Object(m.a)(t, 2),
            n = a[0],
            c = a[1],
            o = Object(l.useState)([]),
            s = Object(m.a)(o, 2),
            i = s[0],
            u = s[1],
            E = Object(l.useState)([]),
            b = Object(m.a)(E, 2),
            h = b[0],
            v = b[1];
          Object(l.useEffect)(function () {
            !(function () {
              var e = Object(p.a)(
                d.a.mark(function e() {
                  var t, a;
                  return d.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              fetch("http://localhost:5002/users", {
                                method: "GET",
                                headers: {
                                  "Content-Type": "application/json",
                                  secret_token:
                                    localStorage.getItem("JWtToken"),
                                },
                              })
                            );
                          case 3:
                            if ((t = e.sent).ok) {
                              e.next = 6;
                              break;
                            }
                            throw new Error("Something went wrong!");
                          case 6:
                            return (e.next = 8), t.json();
                          case 8:
                            (a = e.sent), c(a), (e.next = 14);
                            break;
                          case 12:
                            (e.prev = 12), (e.t0 = e.catch(0));
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 12]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })()();
          }, []);
          var N = [],
            g = [];
          return (
            Object(l.useEffect)(
              function () {
                null != e.slots.Slot.ConfirmedRequests &&
                  n.map(function (t) {
                    e.slots.Slot.ConfirmedRequests.map(function (e) {
                      t._id == e && N.push(t);
                    });
                  }),
                  u(N);
              },
              [n]
            ),
            Object(l.useEffect)(
              function () {
                null != e.slots.Slot.WaitingRequests &&
                  n.map(function (t) {
                    e.slots.Slot.WaitingRequests.map(function (e) {
                      t._id == e && g.push(t);
                    });
                  }),
                  v(g);
              },
              [n]
            ),
            r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(
                "div",
                null,
                r.a.createElement(
                  "button",
                  {
                    className: "btn btn-danger mx-2 btn-sm",
                    type: "button",
                    "data-toggle": "modal",
                    "data-target": "#staticBackdropSlotStatus",
                  },
                  "status"
                ),
                r.a.createElement(
                  "form",
                  null,
                  r.a.createElement(
                    "div",
                    {
                      className: "modal fade",
                      id: "staticBackdropSlotStatus",
                      "data-backdrop": "static",
                      "data-keyboard": "false",
                      tabIndex: "-1",
                      "aria-labelledby": "staticBackdropLabelSlotStatus",
                      "aria-hidden": "true",
                    },
                    r.a.createElement(
                      "div",
                      { className: "modal-dialog ".concat(f.a.modal_lg) },
                      r.a.createElement(
                        "div",
                        { className: "modal-content" },
                        r.a.createElement(
                          "div",
                          { className: "modal-header" },
                          r.a.createElement(
                            "h3",
                            {
                              className: "modal-title",
                              id: "staticBackdropLabelSlotStatus",
                            },
                            "Slot 5 ",
                            e.slot
                          ),
                          r.a.createElement(
                            "button",
                            {
                              type: "button",
                              className: "close",
                              "data-dismiss": "modal",
                              "aria-label": "Close",
                            },
                            r.a.createElement(
                              "span",
                              { "aria-hidden": "true" },
                              "\xd7"
                            )
                          )
                        ),
                        r.a.createElement(
                          "div",
                          { className: "modal-body" },
                          r.a.createElement(
                            "div",
                            { className: "".concat(f.a.panel, " p-3 ") },
                            r.a.createElement(
                              "div",
                              { className: "form-row mt-3" },
                              r.a.createElement(
                                "div",
                                { className: "form-group col" },
                                r.a.createElement(
                                  "label",
                                  { htmlFor: "exampleFormControlTextarea1" },
                                  "Select Date"
                                ),
                                r.a.createElement("input", {
                                  type: "date",
                                  className: f.a.SSDate,
                                })
                              ),
                              r.a.createElement(
                                "div",
                                { className: "form-group col" },
                                r.a.createElement(
                                  "label",
                                  { htmlFor: "exampleFormControlTextarea1" },
                                  "Time"
                                )
                              )
                            ),
                            " ",
                            r.a.createElement(
                              "div",
                              { className: "form-row mt-1" },
                              r.a.createElement(
                                "div",
                                { className: "form-group col" },
                                r.a.createElement(
                                  "label",
                                  { htmlFor: "inputState" },
                                  "Select Hotel"
                                ),
                                r.a.createElement(
                                  "select",
                                  {
                                    id: "inputState",
                                    className: "form-control",
                                  },
                                  r.a.createElement("option", null),
                                  r.a.createElement(
                                    "option",
                                    { value: "CAR" },
                                    "Le Maridien"
                                  ),
                                  r.a.createElement(
                                    "option",
                                    { value: "CAR" },
                                    "..."
                                  )
                                )
                              ),
                              r.a.createElement(
                                "div",
                                { className: "form-group col" },
                                r.a.createElement(
                                  "label",
                                  { htmlFor: "inputState" },
                                  "Select Outlet"
                                ),
                                r.a.createElement(
                                  "select",
                                  {
                                    id: "inputState",
                                    className: "form-control",
                                  },
                                  r.a.createElement(
                                    "option",
                                    { value: "car" },
                                    "Choose..."
                                  ),
                                  r.a.createElement(
                                    "option",
                                    { value: "car" },
                                    "..."
                                  )
                                )
                              )
                            ),
                            r.a.createElement(
                              "div",
                              { className: "form-row mt-1" },
                              r.a.createElement(
                                "div",
                                { className: "form-group col" },
                                r.a.createElement(
                                  "label",
                                  { htmlFor: "exampleFormControlTextarea1" },
                                  "Job Description"
                                ),
                                r.a.createElement("textarea", {
                                  className: "form-control",
                                  id: "exampleFormControlTextarea1",
                                  rows: "3",
                                })
                              )
                            ),
                            r.a.createElement(
                              "div",
                              { className: "form-row mt-1" },
                              r.a.createElement(
                                "div",
                                { className: "form-group col" },
                                r.a.createElement(
                                  "label",
                                  { htmlFor: "exampleFormControlTextarea1" },
                                  "Start Time"
                                ),
                                r.a.createElement("input", {
                                  type: "time",
                                  className: f.a.SSTime,
                                })
                              ),
                              r.a.createElement(
                                "div",
                                { className: "form-group col" },
                                r.a.createElement(
                                  "label",
                                  { htmlFor: "exampleFormControlTextarea1" },
                                  "End Time"
                                ),
                                r.a.createElement("input", {
                                  type: "time",
                                  className: f.a.SSTime,
                                })
                              )
                            ),
                            r.a.createElement(
                              "div",
                              { className: "form-row mt-1" },
                              r.a.createElement(
                                "div",
                                { className: "form-group col" },
                                r.a.createElement(
                                  "label",
                                  null,
                                  "Requested Vacancies"
                                ),
                                r.a.createElement("input", {
                                  type: "number",
                                  className: "form-control",
                                })
                              ),
                              r.a.createElement(
                                "div",
                                { className: "form-group col" },
                                r.a.createElement(
                                  "label",
                                  null,
                                  "Releasing Vacancies"
                                ),
                                r.a.createElement("input", {
                                  type: "number",
                                  className: "form-control",
                                })
                              )
                            ),
                            r.a.createElement(
                              "div",
                              { className: "form-row mt-1" },
                              r.a.createElement(
                                "div",
                                { className: "form-group col" },
                                r.a.createElement(
                                  "label",
                                  { htmlFor: "inputState" },
                                  "Show Groups"
                                ),
                                r.a.createElement(
                                  "select",
                                  {
                                    id: "inputState",
                                    className: "form-control",
                                  },
                                  r.a.createElement(
                                    "option",
                                    { defaultValue: "all" },
                                    "All"
                                  ),
                                  r.a.createElement(
                                    "option",
                                    { value: "CAR" },
                                    "Group 1"
                                  ),
                                  r.a.createElement(
                                    "option",
                                    { value: "CAR" },
                                    "Group 2"
                                  )
                                )
                              )
                            ),
                            r.a.createElement(
                              "div",
                              { className: "form-row mt-1" },
                              r.a.createElement(
                                "div",
                                { className: "form-group col" },
                                r.a.createElement(
                                  "label",
                                  { htmlFor: "inputState" },
                                  "Show Single User"
                                ),
                                r.a.createElement("input", {
                                  type: "text",
                                  className: "form-control",
                                })
                              )
                            ),
                            r.a.createElement(
                              "div",
                              { className: "form-row mt-1" },
                              r.a.createElement(
                                "div",
                                { className: "form-group col" },
                                r.a.createElement(
                                  "label",
                                  null,
                                  "Pay per hour"
                                ),
                                r.a.createElement("input", {
                                  type: "number",
                                  className: f.a.pay,
                                })
                              ),
                              r.a.createElement(
                                "div",
                                { className: "form-group col" },
                                r.a.createElement("label", null, "Total Pay"),
                                r.a.createElement("input", {
                                  type: "number",
                                  className: f.a.pay,
                                })
                              )
                            )
                          )
                        ),
                        r.a.createElement(
                          "div",
                          {
                            className: "".concat(
                              f.a.submissionPanel,
                              " p-3 shadow"
                            ),
                          },
                          r.a.createElement(
                            "header",
                            { className: f.a.header },
                            r.a.createElement(
                              "div",
                              {
                                className:
                                  "row justify-content-between align-items-center",
                              },
                              " ",
                              r.a.createElement(
                                "div",
                                { className: "col-auto" },
                                r.a.createElement(
                                  "h4",
                                  { className: "d-inline" },
                                  "Submissions",
                                  " ",
                                  r.a.createElement(
                                    "span",
                                    { style: { color: "red" } },
                                    " CLOSSED "
                                  )
                                )
                              )
                            ),
                            r.a.createElement("hr", null)
                          ),
                          r.a.createElement(
                            "div",
                            null,
                            r.a.createElement(
                              "table",
                              { className: "table" },
                              r.a.createElement(
                                "thead",
                                { className: "thead-light" },
                                r.a.createElement(
                                  "tr",
                                  null,
                                  r.a.createElement(
                                    "th",
                                    { scope: "col" },
                                    "#"
                                  ),
                                  r.a.createElement(
                                    "th",
                                    { scope: "col" },
                                    "Name"
                                  ),
                                  r.a.createElement(
                                    "th",
                                    { scope: "col" },
                                    "ID"
                                  ),
                                  r.a.createElement(
                                    "th",
                                    { scope: "col" },
                                    "Status"
                                  ),
                                  r.a.createElement(
                                    "th",
                                    { scope: "col" },
                                    "Action"
                                  )
                                )
                              ),
                              r.a.createElement(
                                "tbody",
                                null,
                                i.map(function (e, t) {
                                  return r.a.createElement(
                                    "tr",
                                    { key: e._id },
                                    r.a.createElement(
                                      "th",
                                      { scope: "row" },
                                      t + 1
                                    ),
                                    r.a.createElement("td", null, e.fullName),
                                    r.a.createElement("td", null, "1025"),
                                    r.a.createElement("td", null, "Booked"),
                                    r.a.createElement(
                                      "td",
                                      null,
                                      r.a.createElement(
                                        "button",
                                        {
                                          className:
                                            "btn btn-danger mx-2 btn-sm",
                                        },
                                        "Decline"
                                      ),
                                      r.a.createElement(
                                        "button",
                                        {
                                          className:
                                            "btn btn-danger  mx-2 btn-sm ",
                                        },
                                        "Responses"
                                      )
                                    )
                                  );
                                }),
                                h.map(function (e, t) {
                                  return r.a.createElement(
                                    "tr",
                                    { key: e._id },
                                    r.a.createElement(
                                      "th",
                                      { scope: "row" },
                                      t + 1
                                    ),
                                    r.a.createElement("td", null, e.fullName),
                                    r.a.createElement("td", null, "1025"),
                                    r.a.createElement(
                                      "td",
                                      null,
                                      "WaitingList"
                                    ),
                                    r.a.createElement(
                                      "td",
                                      null,
                                      r.a.createElement(
                                        "button",
                                        {
                                          className:
                                            "btn btn-danger mx-2 btn-sm",
                                        },
                                        "Approve"
                                      ),
                                      r.a.createElement(
                                        "button",
                                        {
                                          className:
                                            "btn btn-danger  mx-2 btn-sm ",
                                        },
                                        "Responses"
                                      )
                                    )
                                  );
                                })
                              )
                            )
                          ),
                          r.a.createElement("div", {
                            className: f.a.addSingleUser,
                          }),
                          r.a.createElement("hr", null),
                          r.a.createElement(
                            "div",
                            { className: "form-row justify-content-center" },
                            r.a.createElement(
                              "div",
                              { className: "form-group col-9" },
                              r.a.createElement("label", null, "Add User"),
                              r.a.createElement("input", {
                                type: "search",
                                className: f.a.SSSearch,
                              })
                            ),
                            r.a.createElement(
                              "div",
                              {
                                className:
                                  "form-group d-flex justify-content-center align-items-center col-3",
                              },
                              r.a.createElement(
                                "button",
                                { className: "btn btn-sm btn-danger" },
                                "Add"
                              )
                            )
                          )
                        ),
                        r.a.createElement(
                          "div",
                          { className: "modal-footer" },
                          r.a.createElement(
                            "button",
                            {
                              type: "button",
                              className: "btn btn-secondary",
                              "data-dismiss": "modal",
                            },
                            "Close"
                          ),
                          r.a.createElement(
                            "button",
                            { type: "button", className: "btn btn-primary" },
                            "Save"
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        },
        h =
          (a(99),
          r.a.createContext({
            viewState: "",
            content: {},
            handleAppView: function (e) {},
            handleContent: function (e) {},
          })),
        v = function (e) {
          var t = Object(l.useState)({}),
            a = Object(m.a)(t, 2),
            n = a[0],
            c = a[1],
            o = Object(l.useState)(""),
            s = Object(m.a)(o, 2),
            i = s[0],
            u = s[1];
          return r.a.createElement(
            h.Provider,
            {
              value: {
                viewState: i,
                handleAppView: function (e) {
                  u(e);
                },
                content: n,
                handleContent: function (e) {
                  c(e);
                },
              },
            },
            e.children
          );
        },
        N = h,
        g = function () {
          Object(l.useContext)(N);
          var e = Object(l.useState)([]),
            t = Object(m.a)(e, 2),
            a = t[0],
            n = t[1];
          Object(l.useEffect)(function () {
            !(function () {
              var e = Object(p.a)(
                d.a.mark(function e() {
                  var t, a;
                  return d.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              fetch("http://localhost:5002/slotList", {
                                method: "GET",
                                headers: {
                                  "Content-Type": "application/json",
                                  secret_token:
                                    localStorage.getItem("JWtToken"),
                                },
                              })
                            );
                          case 3:
                            if ((t = e.sent).ok) {
                              e.next = 6;
                              break;
                            }
                            throw new Error("Something went wrong!");
                          case 6:
                            return (e.next = 8), t.json();
                          case 8:
                            (a = e.sent), n(a), (e.next = 14);
                            break;
                          case 12:
                            (e.prev = 12), (e.t0 = e.catch(0));
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 12]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })()();
          }, []);
          var c = (function () {
            var e = Object(p.a)(
              d.a.mark(function e(t) {
                var a;
                return d.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          fetch(
                            "http://localhost:5002/slotList/".concat(
                              t.target.value
                            ),
                            {
                              method: "DELETE",
                              headers: {
                                secret_token: localStorage.getItem("JWtToken"),
                              },
                            }
                          )
                        );
                      case 2:
                        return (a = e.sent), (e.next = 5), a;
                      case 5:
                        e.sent;
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              "div",
              null,
              r.a.createElement(
                "table",
                { className: "table" },
                r.a.createElement(
                  "thead",
                  { className: "thead-light" },
                  r.a.createElement(
                    "tr",
                    null,
                    r.a.createElement("th", { scope: "col" }, "#"),
                    r.a.createElement("th", { scope: "col" }, "Hotel"),
                    r.a.createElement("th", { scope: "col" }, "Submissions"),
                    r.a.createElement("th", { scope: "col" }, "status"),
                    r.a.createElement("th", { scope: "col" }, "Action")
                  )
                ),
                r.a.createElement(
                  "tbody",
                  null,
                  a.map(function (e, t) {
                    return r.a.createElement(
                      "tr",
                      { key: e._id },
                      r.a.createElement("th", { scope: "row" }, t + 1),
                      r.a.createElement("td", null, e.hotelName),
                      r.a.createElement("td", null, e.ConfirmedRequests.length),
                      r.a.createElement("td", null, "Active"),
                      r.a.createElement(
                        "td",
                        {
                          className:
                            "d-flex justify-content-start align-items-center",
                        },
                        r.a.createElement(
                          "button",
                          {
                            onClick: c,
                            value: e._id,
                            className: "btn btn-danger mx-2 btn-sm",
                          },
                          "Delete"
                        ),
                        r.a.createElement(b, { slots: { Slot: e } })
                      )
                    );
                  })
                )
              )
            )
          );
        },
        w = function () {
          var e = Object(l.useContext)(N);
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              "div",
              { className: "general-margin" },
              r.a.createElement(
                "div",
                { className: "".concat(i.a.panel, " p-3 shadow") },
                r.a.createElement(
                  "header",
                  { className: i.a.header },
                  r.a.createElement(
                    "div",
                    {
                      className:
                        "row justify-content-between align-items-center",
                    },
                    " ",
                    r.a.createElement(
                      "div",
                      { className: "col-auto" },
                      r.a.createElement(
                        "h2",
                        { className: "d-inline" },
                        "Slots"
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "col-auto" },
                      r.a.createElement(
                        "div",
                        null,
                        r.a.createElement(
                          "button",
                          {
                            className: "btn btn-sm btn-danger ml-auto",
                            onClick: function () {
                              e.handleAppView("new-slot-form");
                            },
                            style: {
                              borderRadius: "20px",
                              height: "50px",
                              padding: "0px 20px",
                            },
                          },
                          "+ New Slot"
                        )
                      )
                    )
                  ),
                  r.a.createElement("hr", null)
                ),
                r.a.createElement(
                  "div",
                  null,
                  r.a.createElement(
                    "div",
                    {
                      className:
                        "row justify-content-between align-items-center",
                    },
                    r.a.createElement(
                      "div",
                      { className: "col-auto px-0" },
                      r.a.createElement(
                        "div",
                        { className: "row align-items-center mx-0" },
                        r.a.createElement(
                          "h5",
                          { className: "col" },
                          "Active Slots"
                        ),
                        r.a.createElement("h3", null, "2")
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "col-auto" },
                      r.a.createElement("input", {
                        className: "form-control",
                        placeholder: "search",
                      })
                    )
                  ),
                  r.a.createElement("hr", null),
                  r.a.createElement(g, null)
                )
              )
            )
          );
        },
        S = a(12),
        y = a.n(S),
        j = a(14),
        O = a.n(j),
        _ = a(9),
        k = a.n(_),
        x = (a(105), a(5)),
        C = a.n(x),
        F = a(17),
        I = a.n(F),
        T = function () {
          var e = Object(l.useContext)(N),
            t = Object(l.useState)([]),
            a = Object(m.a)(t, 2),
            n = a[0],
            c = a[1],
            o = Object(l.useState)([]),
            s = Object(m.a)(o, 2),
            i = s[0],
            u = s[1],
            E = Object(l.useState)([]),
            f = Object(m.a)(E, 2),
            b = f[0],
            h = f[1],
            v = Object(l.useState)([]),
            g = Object(m.a)(v, 2),
            w = g[0],
            S = g[1],
            y = Object(l.useState)([]),
            j = Object(m.a)(y, 2),
            _ = j[0],
            x = j[1],
            F = Object(l.useState)([]),
            T = Object(m.a)(F, 2),
            A = T[0],
            L = T[1],
            D = Object(l.useState)([]),
            G = Object(m.a)(D, 2),
            B = G[0],
            V = G[1],
            J = Object(l.useState)(""),
            R = Object(m.a)(J, 2),
            H = R[0],
            q = R[1],
            U = Object(l.useState)(""),
            W = Object(m.a)(U, 2),
            P = W[0],
            M = W[1],
            z = Object(l.useState)(""),
            Z = Object(m.a)(z, 2),
            X = Z[0],
            Y = Z[1],
            Q = Object(l.useState)(""),
            K = Object(m.a)(Q, 2),
            $ = K[0],
            ee = K[1],
            te = Object(l.useState)(""),
            ae = Object(m.a)(te, 2),
            ne = ae[0],
            le = ae[1],
            re = Object(l.useState)(""),
            ce = Object(m.a)(re, 2),
            oe = ce[0],
            me = ce[1],
            se = Object(l.useState)(""),
            ie = Object(m.a)(se, 2),
            ue = ie[0],
            de = ie[1],
            pe = Object(l.useState)(""),
            Ee = Object(m.a)(pe, 2),
            fe = Ee[0],
            be = Ee[1],
            he = Object(l.useState)(""),
            ve = Object(m.a)(he, 2),
            Ne = ve[0],
            ge = ve[1];
          C.a.defaults.headers.common.secret_token = "".concat(
            localStorage.getItem("JWtToken")
          );
          Object(l.useEffect)(function () {
            C()("http://localhost:5002/groupList/all").then(function (e) {
              h(e.data);
            });
          }, []),
            Object(l.useEffect)(function () {
              C()("http://localhost:5002/users").then(function (e) {
                S(e.data);
              });
            }, []),
            Object(l.useEffect)(function () {
              !(function () {
                var e = Object(p.a)(
                  d.a.mark(function e() {
                    var t, a;
                    return d.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                fetch("http://localhost:5002/hotelList", {
                                  method: "GET",
                                  headers: {
                                    "Content-Type": "application/json",
                                    secret_token:
                                      localStorage.getItem("JWtToken"),
                                  },
                                })
                              );
                            case 3:
                              if ((t = e.sent).ok) {
                                e.next = 6;
                                break;
                              }
                              throw new Error("Something went wrong!");
                            case 6:
                              return (e.next = 8), t.json();
                            case 8:
                              (a = e.sent), L(a), (e.next = 14);
                              break;
                            case 12:
                              (e.prev = 12), (e.t0 = e.catch(0));
                            case 14:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 12]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()();
            }, []),
            Object(l.useEffect)(function () {});
          Object(l.useEffect)(
            function () {
              x(
                b.filter(function (e) {
                  return Ne._id === e.outletId;
                })
              );
            },
            [b, Ne]
          ),
            Object(l.useEffect)(
              function () {
                !(function () {
                  var e = Object(p.a)(
                    d.a.mark(function e() {
                      var t, a;
                      return d.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  fetch(
                                    "http://localhost:5002/adminoutletList/".concat(
                                      fe
                                    ),
                                    {
                                      method: "GET",
                                      headers: {
                                        "Content-Type": "application/json",
                                        secret_token:
                                          localStorage.getItem("JWtToken"),
                                      },
                                    }
                                  )
                                );
                              case 3:
                                if ((t = e.sent).ok) {
                                  e.next = 6;
                                  break;
                                }
                                throw new Error("Something went wrong!");
                              case 6:
                                return (e.next = 8), t.json();
                              case 8:
                                (a = e.sent), V(a), (e.next = 14);
                                break;
                              case 12:
                                (e.prev = 12), (e.t0 = e.catch(0));
                              case 14:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 12]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })()();
              },
              [fe]
            );
          window.addEventListener(
            "keypress",
            function (e) {
              "Enter" === e.key &&
                I()(e.target)[0] != I()("textarea")[0] &&
                e.preventDefault();
            },
            !1
          );
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              "div",
              { className: "general-margin" },
              r.a.createElement(
                "form",
                {
                  onSubmit: function (t) {
                    var a;
                    t.preventDefault(),
                      (a = A.filter(function (e) {
                        return e._id == fe;
                      })),
                      e.handleAppView("slots"),
                      e.handleContent("");
                    var n = {
                      date: ue,
                      hotel: fe,
                      outletName: Ne.outletName,
                      hotelName: a[0].hotelName,
                      outlet: Ne._id,
                      startTime: H,
                      endTime: P,
                      reqVac: X,
                      relVac: $,
                      payperhour: ne,
                      totalpay: oe,
                    };
                    C.a
                      .post("http://localhost:5002/slotList", n)
                      .then(function (e) {})
                      .then(function () {});
                  },
                },
                r.a.createElement(
                  "div",
                  { className: "".concat(k.a.panel, " p-3 shadow") },
                  r.a.createElement(
                    "header",
                    { className: k.a.header },
                    r.a.createElement(
                      "div",
                      {
                        className:
                          "row justify-content-between align-items-center",
                      },
                      " ",
                      r.a.createElement(
                        "div",
                        { className: "col-auto" },
                        r.a.createElement(
                          "h4",
                          { className: "d-inline" },
                          "Add New Slot "
                        )
                      ),
                      r.a.createElement(
                        "div",
                        { className: "col-auto" },
                        r.a.createElement(
                          "h6",
                          { className: "d-inline align-items-center " },
                          r.a.createElement(
                            "span",
                            { className: "display-4" },
                            5,
                            " "
                          ),
                          " "
                        )
                      )
                    ),
                    r.a.createElement("hr", null)
                  ),
                  r.a.createElement(
                    "div",
                    { className: "form-row mt-3" },
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "exampleFormControlTextarea1" },
                        "Select Date"
                      ),
                      r.a.createElement("input", {
                        required: !0,
                        type: "date",
                        className: k.a.NSFDate,
                        onChange: function (e) {
                          de(e.target.value);
                        },
                      })
                    ),
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "exampleFormControlTextarea1" },
                        "Time"
                      )
                    )
                  ),
                  " ",
                  r.a.createElement(
                    "div",
                    { className: "form-row mt-1" },
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { required: !0, htmlFor: "inputState" },
                        "Select Hotel"
                      ),
                      r.a.createElement(
                        "select",
                        {
                          id: "inputState",
                          className: "form-control",
                          name: "hotelDetails",
                          onChange: function (e) {
                            be(e.target.value);
                          },
                        },
                        r.a.createElement("option", null),
                        null != A &&
                          A.map(function (e) {
                            return r.a.createElement(
                              "option",
                              { key: e._id, value: e._id },
                              e.hotelName
                            );
                          })
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { required: !0, htmlFor: "inputState" },
                        "Select Outlet"
                      ),
                      r.a.createElement(
                        "select",
                        {
                          onChange: function (e) {
                            ge(
                              B.filter(function (t) {
                                return t._id === e.target.value;
                              })[0]
                            );
                          },
                          id: "inputState",
                          className: "form-control",
                        },
                        r.a.createElement("option", null),
                        null != B &&
                          B.map(function (e) {
                            return r.a.createElement(
                              "option",
                              { key: e._id, value: e._id },
                              e.outletName
                            );
                          })
                      )
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "form-row mt-1" },
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "exampleFormControlTextarea1" },
                        "Job Description"
                      ),
                      r.a.createElement("textarea", {
                        className: "form-control",
                        id: "exampleFormControlTextarea1",
                        rows: "3",
                        value: null != Ne && Ne.jobRemarks,
                      })
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "form-row mt-1" },
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "exampleFormControlTextarea1" },
                        "Start Time"
                      ),
                      r.a.createElement("input", {
                        required: !0,
                        type: "time",
                        onChange: function (e) {
                          q(e.target.value);
                        },
                        className: k.a.NSFTime,
                      })
                    ),
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "exampleFormControlTextarea1" },
                        "End Time"
                      ),
                      r.a.createElement("input", {
                        required: !0,
                        type: "time",
                        onChange: function (e) {
                          M(e.target.value);
                        },
                        className: k.a.NSFTime,
                      })
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "form-row mt-1" },
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement("label", null, "Requested Vacancies"),
                      r.a.createElement("input", {
                        required: !0,
                        onChange: function (e) {
                          Y(e.target.value);
                        },
                        value: X,
                        type: "number",
                        className: "form-control",
                      })
                    ),
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement("label", null, "Releasing Vacancies"),
                      r.a.createElement("input", {
                        required: !0,
                        onChange: function (e) {
                          ee(e.target.value);
                        },
                        value: $,
                        type: "number",
                        className: "form-control",
                      })
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "form-row mt-1" },
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputState" },
                        "OutLet Show Groups"
                      ),
                      r.a.createElement(O.a, {
                        className: ""
                          .concat(k.a.searchBox, " ")
                          .concat(k.a.optionContainer, " ")
                          .concat(k.a.option, " ")
                          .concat(k.a.multiselectContainer, " ")
                          .concat(k.a.ighlightOption),
                        options: _,
                        selectedValues: i,
                        onSelect: function (e) {
                          u(e);
                        },
                        onRemove: function (e) {
                          u(e);
                        },
                        displayValue: "groupTitle",
                      })
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "form-row mt-1" },
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputState" },
                        "Show Selected Users"
                      ),
                      r.a.createElement(O.a, {
                        className: ""
                          .concat(k.a.searchBox, " ")
                          .concat(k.a.optionContainer, " ")
                          .concat(k.a.option, " ")
                          .concat(k.a.multiselectContainer, " ")
                          .concat(k.a.ighlightOption),
                        options: w,
                        selectedValues: n,
                        onSelect: function (e) {
                          c(e);
                        },
                        onRemove: function (e) {
                          c(e);
                        },
                        selectionLimit: 4,
                        displayValue: "fullName",
                      })
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "form-row mt-1" },
                    r.a.createElement(
                      "div",
                      { className: "form- group col" },
                      r.a.createElement("label", null, "Pay per hour"),
                      r.a.createElement("input", {
                        required: !0,
                        onChange: function (e) {
                          le(e.target.value);
                          var t = H.split(/[.:]/);
                          parseInt(t[0], 10), t[1] && parseInt(t[1], 10);
                        },
                        value: ne,
                        type: "number",
                        className: k.a.pay,
                      })
                    ),
                    r.a.createElement(
                      "div",
                      { className: "form- group col" },
                      r.a.createElement("label", null, "Total Pay"),
                      r.a.createElement("input", {
                        value: oe,
                        type: "number",
                        className: k.a.pay,
                        onChange: function (e) {
                          me(e.target.value);
                        },
                      })
                    )
                  ),
                  r.a.createElement("hr", { className: "mt-5" }),
                  r.a.createElement(
                    "footer",
                    { className: " ".concat(k.a.footer) },
                    r.a.createElement(
                      "button",
                      { type: "button", className: "btn btn-secondary m-2" },
                      "Cancel"
                    ),
                    r.a.createElement(
                      "button",
                      { type: "submit", className: "btn btn-primary m-2" },
                      "Submit"
                    )
                  )
                )
              )
            )
          );
        },
        A = (a(83), a(129), a(8)),
        L = a.n(A),
        D = a(84),
        G = a.n(D),
        B = function (e) {
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              "table",
              { className: "table ".concat(G.a.table) },
              r.a.createElement(
                "thead",
                { className: "thead-light" },
                r.a.createElement(
                  "tr",
                  null,
                  r.a.createElement(
                    "th",
                    { scope: "col" },
                    "#",
                    r.a.createElement("i", {
                      className: "bi bi-sort-numeric-up",
                    })
                  ),
                  r.a.createElement(
                    "th",
                    { scope: "col" },
                    "Name",
                    r.a.createElement("i", {
                      className: "bi bi-sort-numeric-up",
                    })
                  ),
                  r.a.createElement("th", { scope: "col" }, "Account Status"),
                  r.a.createElement("th", { scope: "col" }, "Job Status"),
                  r.a.createElement("th", { scope: "col" }, "Action")
                )
              ),
              r.a.createElement(
                "tbody",
                null,
                e.selectedUsers.map(function (e) {
                  return r.a.createElement(
                    "tr",
                    { key: e._id },
                    r.a.createElement("th", { scope: "row" }, "1055"),
                    r.a.createElement("td", null, e.fullName),
                    r.a.createElement("td", null, "Verified"),
                    r.a.createElement("td", null, "Active"),
                    r.a.createElement(
                      "td",
                      null,
                      r.a.createElement(
                        "button",
                        { className: "btn btn-sm btn-danger mr-1" },
                        "Delete"
                      )
                    )
                  );
                })
              )
            )
          );
        },
        V = a(36),
        J = a.n(V),
        R = function (e) {
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              "div",
              { className: "genral-margin" },
              r.a.createElement(
                "div",
                { className: "".concat(J.a.panel, " p-3  shadow") },
                r.a.createElement(
                  "header",
                  { className: J.a.header },
                  r.a.createElement(
                    "div",
                    {
                      className:
                        "row justify-content-between align-items-center",
                    },
                    " ",
                    r.a.createElement(
                      "div",
                      {
                        className:
                          "col-auto d-flex justify-content-center align-items-center ",
                      },
                      r.a.createElement(
                        "h5",
                        { className: "d-inline" },
                        "Members"
                      ),
                      r.a.createElement(
                        "h3",
                        { className: J.a.total },
                        " [2055]"
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "col-auto" },
                      r.a.createElement("input", {
                        className: "form-control",
                        placeholder: "search",
                      })
                    )
                  ),
                  r.a.createElement("hr", null)
                ),
                r.a.createElement(B, { selectedUsers: e.selectedUsers })
              )
            )
          );
        },
        H = function (e) {
          var t = Object(l.useState)([]),
            a = Object(m.a)(t, 2),
            n = a[0],
            c = a[1],
            o = Object(l.useState)("as"),
            s = Object(m.a)(o, 2),
            i = s[0],
            u = s[1],
            E = Object(l.useState)("d"),
            f = Object(m.a)(E, 2),
            b = (f[0], f[1], Object(l.useState)("e")),
            h = Object(m.a)(b, 2),
            v = (h[0], h[1], Object(l.useState)([])),
            N = Object(m.a)(v, 2),
            g = N[0],
            w = N[1];
          Object(l.useEffect)(function () {
            !(function () {
              var e = Object(p.a)(
                d.a.mark(function e() {
                  var t, a;
                  return d.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              fetch("http://localhost:5002/users", {
                                method: "GET",
                                headers: {
                                  "Content-Type": "application/json",
                                  secret_token:
                                    localStorage.getItem("JWtToken"),
                                },
                              })
                            );
                          case 3:
                            if ((t = e.sent).ok) {
                              e.next = 6;
                              break;
                            }
                            throw new Error("Something went wrong!");
                          case 6:
                            return (e.next = 8), t.json();
                          case 8:
                            (a = e.sent), w(a), (e.next = 14);
                            break;
                          case 12:
                            (e.prev = 12), (e.t0 = e.catch(0));
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 12]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })()();
          }, []);
          C.a.defaults.headers.common.secret_token = "".concat(
            localStorage.getItem("JWtToken")
          );
          var S = (function () {
              var t = Object(p.a)(
                d.a.mark(function t() {
                  var a;
                  return d.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          (a = []),
                            n.map(function (e) {
                              a.push(e._id);
                            }),
                            C.a
                              .post("http://localhost:5002/groupList", {
                                outletId: e.outlet.outlet._id,
                                title: i,
                                users: a,
                              })
                              .then(function (e) {})
                              .then(function () {
                                e.fetchGroups();
                              });
                        case 3:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function () {
                return t.apply(this, arguments);
              };
            })(),
            y = r.a.createElement(R, { selectedUsers: n });
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              "button",
              {
                type: "button",
                className: "btn btn-sm btn-danger ml-2",
                "data-toggle": "modal",
                "data-target": "#staticBackdrop".concat(e.outlet.outlet._id),
              },
              "+ Create Group"
            ),
            " ",
            r.a.createElement(
              "div",
              null,
              r.a.createElement(
                "div",
                {
                  className: "modal fade",
                  id: "staticBackdrop".concat(e.outlet.outlet._id),
                  "data-backdrop": "static",
                  "data-keyboard": "false",
                  tabIndex: "-1",
                  "aria-labelledby": "staticBackdropLabel".concat(
                    e.outlet.outlet._id
                  ),
                  "aria-hidden": "true",
                },
                r.a.createElement(
                  "div",
                  { className: "modal-dialog ".concat(L.a.modal_lg) },
                  r.a.createElement(
                    "div",
                    { className: "modal-content" },
                    r.a.createElement(
                      "div",
                      { className: "modal-header " },
                      r.a.createElement(
                        "div",
                        {
                          className:
                            "row justify-content-between align-items-center",
                        },
                        r.a.createElement(
                          "div",
                          { className: "col" },
                          r.a.createElement(
                            "h5",
                            {
                              className: "modal-title",
                              id: "staticBackdropLabel".concat(
                                e.outlet.outlet._id
                              ),
                            },
                            "New Group ",
                            r.a.createElement(
                              "span",
                              { className: "display-4" },
                              "5"
                            ),
                            r.a.createElement(
                              "span",
                              { className: "ml-5" },
                              e.outlet.outlet.outletName
                            )
                          )
                        )
                      ),
                      r.a.createElement(
                        "button",
                        {
                          type: "button",
                          className: "close",
                          "data-dismiss": "modal",
                          "aria-label": "Close",
                        },
                        r.a.createElement(
                          "span",
                          { "aria-hidden": "true" },
                          "\xd7"
                        )
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "modal-body" },
                      r.a.createElement(
                        "div",
                        null,
                        r.a.createElement(
                          "div",
                          { className: "form-row mt-3" },
                          r.a.createElement(
                            "div",
                            {
                              className:
                                "form-group col d-flex justify-content-center align-items-center",
                            },
                            r.a.createElement(
                              "label",
                              { htmlFor: "exampleFormControlTextarea1" },
                              "Date"
                            ),
                            r.a.createElement("input", {
                              type: "date",
                              className: L.a.NGFDate,
                            })
                          ),
                          r.a.createElement(
                            "div",
                            {
                              className:
                                "form-group d-flex justify-content-center align-items-center col",
                            },
                            r.a.createElement(
                              "label",
                              { htmlFor: "exampleFormControlTextarea1" },
                              "Time"
                            ),
                            r.a.createElement("input", {
                              type: "time",
                              className: L.a.NGFTime,
                            })
                          )
                        ),
                        " ",
                        r.a.createElement(
                          "div",
                          { className: "form-row ".concat(L.a.next) },
                          r.a.createElement(
                            "div",
                            { className: "col" },
                            r.a.createElement(
                              "label",
                              { htmlFor: "ourletname" },
                              "Group Title"
                            ),
                            r.a.createElement("input", {
                              id: "outletname",
                              type: "text",
                              className: "form-control ",
                              placeholder: "Eg. Group ",
                              onChange: function (e) {
                                u(e.target.value);
                              },
                              value: i,
                            })
                          )
                        )
                      ),
                      r.a.createElement(
                        "div",
                        { className: "form-row ".concat(L.a.next) },
                        r.a.createElement(
                          "div",
                          { className: "form-group col" },
                          r.a.createElement(
                            "label",
                            { htmlFor: "inputState" },
                            "Select Users"
                          ),
                          r.a.createElement(O.a, {
                            className: ""
                              .concat(L.a.searchBox, " ")
                              .concat(L.a.optionContainer, " ")
                              .concat(L.a.option, " ")
                              .concat(L.a.multiselectContainer, " ")
                              .concat(L.a.ighlightOption),
                            options: g,
                            selectedValues: n,
                            onSelect: function (e) {
                              c(e);
                            },
                            onRemove: function (e) {
                              c(e);
                            },
                            selectionLimit: 50,
                            displayValue: "fullName",
                          })
                        )
                      )
                    ),
                    y,
                    r.a.createElement(
                      "div",
                      { className: "modal-footer" },
                      r.a.createElement(
                        "button",
                        {
                          type: "button",
                          className: "btn btn-secondary",
                          "data-dismiss": "modal",
                        },
                        "Cancel"
                      ),
                      r.a.createElement(
                        "button",
                        {
                          type: "button",
                          onClick: S,
                          className: "btn btn-primary",
                          "data-dismiss": "modal",
                        },
                        "Submit"
                      )
                    )
                  )
                )
              )
            )
          );
        },
        q = a(37),
        U = a.n(q),
        W = a(16),
        P = a.n(W),
        M = function (e) {
          var t = Object(l.useState)("edit" == e.edit ? e.hotel._id : ""),
            a = Object(m.a)(t, 2),
            n =
              (a[0],
              a[1],
              Object(l.useState)("edit" == e.edit ? e.hotel.hotelName : "")),
            c = Object(m.a)(n, 2),
            o = c[0],
            s = c[1],
            i = Object(l.useState)("edit" == e.edit ? e.hotel.SOAMail : ""),
            u = Object(m.a)(i, 2),
            E = u[0],
            f = u[1],
            b = Object(l.useState)(null),
            h = Object(m.a)(b, 2),
            v = h[0],
            N = h[1],
            g = Object(l.useState)("edit" == e.edit ? e.hotel.longitude : ""),
            w = Object(m.a)(g, 2),
            S = w[0],
            y = w[1],
            j = Object(l.useState)("edit" == e.edit ? e.hotel.latitude : ""),
            O = Object(m.a)(j, 2),
            _ = O[0],
            k = O[1],
            x = (function () {
              var t = Object(p.a)(
                d.a.mark(function t(a) {
                  var n, l, r;
                  return d.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            a.preventDefault(),
                            (n = {
                              title: o,
                              SOAmail: E,
                              longitude: S,
                              latitude: _,
                            }),
                            (l = new FormData()),
                            Object.keys(v).map(function (e, t) {
                              l.append("logo", v[e]);
                            }),
                            l.append("state", JSON.stringify(n)),
                            localStorage.getItem("JWTTOken"),
                            (t.next = 8),
                            fetch("http://localhost:5002/hotelList", {
                              method: "POST",
                              body: l,
                              headers: {
                                secret_token: localStorage.getItem("JWtToken"),
                              },
                            })
                          );
                        case 8:
                          return (r = t.sent), (t.next = 11), r;
                        case 11:
                          return t.sent, (t.next = 14), e.fetchClients();
                        case 14:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })();
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              "button",
              {
                id: "newHotelFormButton",
                type: "button",
                className: "btn btn-sm btn-danger ml-2",
                "data-toggle": "modal",
                "data-target": "#staticBackdropHotel",
                style: { borderRadius: "20px", height: "50px" },
              },
              null != e.edit ? "Edit" : " + New Hotel Form"
            ),
            " ",
            r.a.createElement(
              "form",
              { onSubmit: x },
              r.a.createElement(
                "div",
                {
                  className: "modal fade",
                  id: "staticBackdropHotel",
                  "data-backdrop": "static",
                  "data-keyboard": "false",
                  tabIndex: "-1",
                  "aria-labelledby": "staticBackdropLabelHotel",
                  "aria-hidden": "true",
                },
                r.a.createElement(
                  "div",
                  { className: "modal-dialog modal-lg" },
                  r.a.createElement(
                    "div",
                    { className: "modal-content" },
                    r.a.createElement(
                      "div",
                      { className: "modal-header" },
                      r.a.createElement(
                        "h5",
                        {
                          className: "modal-title",
                          id: "staticBackdropLabelHotel",
                        },
                        "Add Hotel"
                      ),
                      r.a.createElement(
                        "button",
                        {
                          type: "button",
                          className: "close",
                          "data-dismiss": "modal",
                          "aria-label": "Close",
                        },
                        r.a.createElement(
                          "span",
                          { "aria-hidden": "true" },
                          "\xd7"
                        )
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "modal-body" },
                      r.a.createElement(
                        "div",
                        { className: "form-row" },
                        r.a.createElement(
                          "div",
                          { className: "col" },
                          r.a.createElement("input", {
                            type: "text",
                            className: "form-control ",
                            placeholder: "Hotel name",
                            value: o,
                            onChange: function (e) {
                              s(e.target.value);
                            },
                            required: !0,
                          })
                        ),
                        r.a.createElement(
                          "div",
                          { className: "col" },
                          r.a.createElement("input", {
                            type: "email",
                            className: "form-control",
                            placeholder: "SOA Mail",
                            value: E,
                            onChange: function (e) {
                              f(e.target.value);
                            },
                            required: !0,
                          })
                        )
                      ),
                      r.a.createElement(
                        "div",
                        { className: "form-group ".concat(P.a.next) },
                        r.a.createElement(
                          "label",
                          { htmlFor: "exampleFormControlFile1" },
                          "Hotel Logo"
                        ),
                        r.a.createElement("input", {
                          type: "file",
                          className: "form-control-file",
                          id: "exampleFormControlFile1",
                          onChange: function (e) {
                            N(e.target.files);
                            var t = document.getElementById("previewImages");
                            Array.from(e.target.files).forEach(function (e) {
                              for (var a = new FileReader(); t.firstChild; )
                                t.removeChild(t.firstChild);
                              a.abort(),
                                (a.onload = function () {
                                  var e = new Image();
                                  (e.src = String(a.result)),
                                    e.classList.add(
                                      "".concat(P.a.previewImage)
                                    ),
                                    t.appendChild(e);
                                }),
                                a.readAsDataURL(e);
                            });
                          },
                          required: !0,
                          accept: "image/png, image/jpeg ,image/jpg",
                        })
                      ),
                      r.a.createElement("div", { id: "previewImages" }),
                      r.a.createElement(
                        "div",
                        { className: P.a.next },
                        r.a.createElement("label", null, "Add Geo Location"),
                        r.a.createElement(
                          "div",
                          { className: "form-row" },
                          r.a.createElement(
                            "div",
                            { className: "col" },
                            r.a.createElement("input", {
                              required: !0,
                              type: "number",
                              className: "form-control ",
                              placeholder: "Longitude",
                              value: S,
                              onChange: function (e) {
                                y(e.target.value);
                              },
                            })
                          ),
                          r.a.createElement(
                            "div",
                            { className: "col" },
                            r.a.createElement("input", {
                              required: !0,
                              type: "number",
                              className: "form-control",
                              placeholder: "Latitude",
                              value: _,
                              onChange: function (e) {
                                k(e.target.value);
                              },
                            })
                          )
                        )
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "modal-footer" },
                      r.a.createElement(
                        "button",
                        {
                          type: "button",
                          className: "btn btn-secondary",
                          "data-dismiss": "modal",
                        },
                        "Cancel"
                      ),
                      r.a.createElement(
                        "button",
                        { type: "submit", className: "btn btn-primary" },
                        "Submit"
                      )
                    )
                  )
                )
              )
            )
          );
        },
        z = function (e) {
          var t = Object(l.useState)(e.hotel._id),
            a = Object(m.a)(t, 2),
            n = (a[0], a[1], Object(l.useState)(e.hotel.hotelName)),
            c = Object(m.a)(n, 2),
            o = c[0],
            s = c[1],
            i = Object(l.useState)(e.hotel.SOAMail),
            u = Object(m.a)(i, 2),
            E = u[0],
            f = u[1],
            b = Object(l.useState)([]),
            h = Object(m.a)(b, 2),
            v = h[0],
            N = h[1],
            g = Object(l.useState)(e.hotel.longitude),
            w = Object(m.a)(g, 2),
            S = w[0],
            y = w[1],
            j = Object(l.useState)(e.hotel.latitude),
            O = Object(m.a)(j, 2),
            _ = O[0],
            k = O[1];
          Object(l.useEffect)(function () {
            var t = document.getElementById(
                "previewImages".concat(e.hotel._id)
              ),
              a = new Image();
            (a.src = String(
              "http://localhost:5002/images/".concat(e.hotel.hotelEmblem)
            )),
              a.classList.add("".concat(P.a.previewImage)),
              t.appendChild(a);
          }, []);
          var x = (function () {
            var t = Object(p.a)(
              d.a.mark(function t(a) {
                var n, l, r;
                return d.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          a.preventDefault(),
                          (n = {
                            id: e.hotel._id,
                            title: o,
                            SOAmail: E,
                            longitude: S,
                            latitude: _,
                          }),
                          (l = new FormData()),
                          Object.keys(v).map(function (e, t) {
                            l.append("logo", v[e]);
                          }),
                          l.append("state", JSON.stringify(n)),
                          localStorage.getItem("JWTTOken"),
                          (t.next = 8),
                          fetch("http://localhost:5002/hotelList", {
                            method: "PATCH",
                            body: l,
                            headers: {
                              secret_token: localStorage.getItem("JWtToken"),
                            },
                          })
                        );
                      case 8:
                        return (r = t.sent), (t.next = 11), r;
                      case 11:
                        t.sent;
                      case 12:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              "button",
              {
                id: "newHotelFormButton",
                type: "button",
                className: "btn btn-sm btn-danger ml-2",
                "data-toggle": "modal",
                "data-target": "#staticBackdrop".concat(e.hotel._id),
              },
              "Edit"
            ),
            " ",
            r.a.createElement(
              "form",
              { onSubmit: x },
              r.a.createElement(
                "div",
                {
                  className: "modal fade",
                  id: "staticBackdrop".concat(e.hotel._id),
                  "data-backdrop": "static",
                  "data-keyboard": "false",
                  tabIndex: "-1",
                  "aria-labelledby": "staticBackdropLabel"
                    .concat(e.hotel._id)
                    .concat(e.hotel.hotelName),
                  "aria-hidden": "true",
                },
                r.a.createElement(
                  "div",
                  { className: "modal-dialog modal-lg" },
                  r.a.createElement(
                    "div",
                    { className: "modal-content" },
                    r.a.createElement(
                      "div",
                      { className: "modal-header" },
                      r.a.createElement(
                        "h5",
                        {
                          className: "modal-title",
                          id: "staticBackdropLabel"
                            .concat(e.hotel._id)
                            .concat(e.hotel.hotelName),
                        },
                        "Add Hotel"
                      ),
                      r.a.createElement(
                        "button",
                        {
                          type: "button",
                          className: "close",
                          "data-dismiss": "modal",
                          "aria-label": "Close",
                        },
                        r.a.createElement(
                          "span",
                          { "aria-hidden": "true" },
                          "\xd7"
                        )
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "modal-body" },
                      r.a.createElement(
                        "div",
                        { className: "form-row" },
                        r.a.createElement(
                          "div",
                          { className: "col" },
                          r.a.createElement("input", {
                            type: "text",
                            className: "form-control ",
                            placeholder: "Hotel name",
                            value: o,
                            onChange: function (e) {
                              s(e.target.value);
                            },
                            required: !0,
                          })
                        ),
                        r.a.createElement(
                          "div",
                          { className: "col" },
                          r.a.createElement("input", {
                            type: "email",
                            className: "form-control",
                            placeholder: "SOA Mail",
                            value: E,
                            onChange: function (e) {
                              f(e.target.value);
                            },
                            required: !0,
                          })
                        )
                      ),
                      r.a.createElement(
                        "div",
                        { className: "form-group ".concat(P.a.next) },
                        r.a.createElement(
                          "label",
                          { htmlFor: "exampleFormControlFile1" },
                          "Hotel Logo"
                        ),
                        r.a.createElement("input", {
                          type: "file",
                          className: "form-control-file",
                          id: "exampleFormControlFile1",
                          onChange: function (t) {
                            N(t.target.files);
                            var a = document.getElementById(
                              "previewImages".concat(e.hotel._id)
                            );
                            Array.from(t.target.files).forEach(function (e) {
                              for (var t = new FileReader(); a.firstChild; )
                                a.removeChild(a.firstChild);
                              t.abort(),
                                (t.onload = function () {
                                  var e = new Image();
                                  (e.src = String(t.result)),
                                    e.classList.add(
                                      "".concat(P.a.previewImage)
                                    ),
                                    a.appendChild(e);
                                }),
                                t.readAsDataURL(e);
                            });
                          },
                          accept: "image/png, image/jpeg ,image/jpg",
                        })
                      ),
                      r.a.createElement("div", {
                        id: "previewImages".concat(e.hotel._id),
                      }),
                      r.a.createElement(
                        "div",
                        { className: P.a.next },
                        r.a.createElement("label", null, "Add Geo Location"),
                        r.a.createElement(
                          "div",
                          { className: "form-row" },
                          r.a.createElement(
                            "div",
                            { className: "col" },
                            r.a.createElement("input", {
                              required: !0,
                              type: "number",
                              className: "form-control ",
                              placeholder: "Longitude",
                              value: S,
                              onChange: function (e) {
                                y(e.target.value);
                              },
                            })
                          ),
                          r.a.createElement(
                            "div",
                            { className: "col" },
                            r.a.createElement("input", {
                              required: !0,
                              type: "number",
                              className: "form-control",
                              placeholder: "Latitude",
                              value: _,
                              onChange: function (e) {
                                k(e.target.value);
                              },
                            })
                          )
                        )
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "modal-footer" },
                      r.a.createElement(
                        "button",
                        {
                          type: "button",
                          className: "btn btn-secondary",
                          "data-dismiss": "modal",
                        },
                        "Cancel"
                      ),
                      r.a.createElement(
                        "button",
                        { type: "submit", className: "btn btn-primary" },
                        "Submit"
                      )
                    )
                  )
                )
              )
            )
          );
        },
        Z = function (e) {
          var t = Object(l.useContext)(N),
            a = Object(l.useState)([]),
            n = Object(m.a)(a, 2),
            c = n[0],
            o = n[1];
          Object(l.useEffect)(function () {
            !(function () {
              var t = Object(p.a)(
                d.a.mark(function t() {
                  var a, n;
                  return d.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0),
                              (t.next = 3),
                              fetch(
                                "http://localhost:5002/adminoutletList/".concat(
                                  e.hotel._id
                                ),
                                {
                                  method: "GET",
                                  headers: {
                                    "Content-Type": "application/json",
                                    secret_token:
                                      localStorage.getItem("JWtToken"),
                                  },
                                }
                              )
                            );
                          case 3:
                            if ((a = t.sent).ok) {
                              t.next = 6;
                              break;
                            }
                            throw new Error("Something went wrong!");
                          case 6:
                            return (t.next = 8), a.json();
                          case 8:
                            (n = t.sent), o(n), (t.next = 14);
                            break;
                          case 12:
                            (t.prev = 12), (t.t0 = t.catch(0));
                          case 14:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[0, 12]]
                  );
                })
              );
              return function () {
                return t.apply(this, arguments);
              };
            })()();
          }, []);
          var s = (function () {
              var t = Object(p.a)(
                d.a.mark(function t(a) {
                  var n;
                  return d.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2),
                            fetch(
                              "http://localhost:5002/hotelList/".concat(
                                a.target.value
                              ),
                              {
                                method: "DELETE",
                                headers: {
                                  secret_token:
                                    localStorage.getItem("JWtToken"),
                                },
                              }
                            )
                          );
                        case 2:
                          return (n = t.sent), (t.next = 5), n;
                        case 5:
                          return t.sent, (t.next = 8), e.fetchClients();
                        case 8:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
            i = function (a) {
              var n = c.filter(function (e) {
                return e._id == a.target.value;
              });
              e.editOutlet({ outlet: n[0] }),
                t.handleAppView("edit-outlet-form");
            },
            u = function () {
              e.fetchGroups();
            },
            E = (function () {
              var e = Object(p.a)(
                d.a.mark(function e(t) {
                  var a;
                  return d.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            fetch(
                              "http://localhost:5002/outletList/".concat(
                                t.target.value
                              ),
                              {
                                method: "DELETE",
                                headers: {
                                  secret_token:
                                    localStorage.getItem("JWtToken"),
                                },
                              }
                            )
                          );
                        case 2:
                          return (a = e.sent), (e.next = 5), a;
                        case 5:
                          e.sent;
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              "div",
              { className: "shadow-sm mt-1" },
              r.a.createElement(
                "div",
                { className: "row my-2 px-4  align-items-center" },
                r.a.createElement(
                  "div",
                  { className: "col-4" },
                  r.a.createElement("h6", null, e.hotel.hotelName)
                ),
                r.a.createElement(
                  "div",
                  { className: "col-4" },
                  r.a.createElement("h6", null, e.hotel.SOAMail)
                ),
                r.a.createElement(
                  "div",
                  { className: "col-4 d-flex align-items-center " },
                  r.a.createElement(z, { key: e.hotel._id, hotel: e.hotel }),
                  r.a.createElement(
                    "button",
                    {
                      className: "btn btn-sm btn-danger ml-2",
                      onClick: s,
                      value: e.hotel._id,
                    },
                    "Delete"
                  ),
                  r.a.createElement("i", {
                    className:
                      "bi bi-caret-down-square-fill p-auto ml-2 ".concat(
                        U.a.icon
                      ),
                  })
                )
              ),
              r.a.createElement(
                "div",
                null,
                r.a.createElement(
                  "div",
                  { className: "row align-content-center" },
                  r.a.createElement(
                    "div",
                    { className: "col ".concat(U.a.outletList) },
                    r.a.createElement(
                      "h5",
                      { className: "my-2 p-0" },
                      "OUTLETS"
                    )
                  )
                ),
                c.map(function (e) {
                  return r.a.createElement(
                    "div",
                    { key: e._id, className: U.a.outlet },
                    " ",
                    r.a.createElement(
                      "div",
                      { className: "row align-content-center shadow-sm" },
                      " ",
                      r.a.createElement(
                        "div",
                        { className: "col d-flex align-items-center" },
                        r.a.createElement(
                          "h6",
                          { className: "p-3 " },
                          e.outletName
                        ),
                        r.a.createElement(
                          "button",
                          {
                            className: "btn btn-sm btn-danger ml-auto",
                            value: e._id,
                            onClick: i,
                          },
                          "Edit"
                        ),
                        r.a.createElement(
                          "button",
                          {
                            className: "btn btn-sm btn-danger ml-2",
                            onClick: E,
                            value: e._id,
                          },
                          "Delete"
                        ),
                        r.a.createElement(H, {
                          outlet: { outlet: e, action: "edit" },
                          fetchGroups: u,
                        })
                      )
                    )
                  );
                })
              )
            )
          );
        },
        X = function (e) {
          var t = Object(l.useState)([]),
            a = Object(m.a)(t, 2),
            n = a[0],
            c = a[1],
            o = Object(l.useState)(""),
            s = Object(m.a)(o, 2),
            i = s[0],
            u = s[1];
          Object(l.useEffect)(
            function () {
              u(e.refresh);
            },
            [e.refresh]
          ),
            Object(l.useEffect)(
              function () {
                !(function () {
                  var e = Object(p.a)(
                    d.a.mark(function e() {
                      var t, a;
                      return d.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  fetch("http://localhost:5002/hotelList", {
                                    method: "GET",
                                    headers: {
                                      "Content-Type": "application/json",
                                      secret_token:
                                        localStorage.getItem("JWtToken"),
                                    },
                                  })
                                );
                              case 3:
                                if ((t = e.sent).ok) {
                                  e.next = 6;
                                  break;
                                }
                                throw new Error("Something went wrong!");
                              case 6:
                                return (e.next = 8), t.json();
                              case 8:
                                (a = e.sent), c(a), (e.next = 14);
                                break;
                              case 12:
                                (e.prev = 12), (e.t0 = e.catch(0));
                              case 14:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 12]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })()();
              },
              [i]
            );
          var E = function (t) {
              e.editOutlet(t);
            },
            f = function () {
              e.fetchGroups();
            },
            b = function () {
              u("now");
            };
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              "div",
              { className: "mt-4" },
              n.map(function (e) {
                return r.a.createElement(Z, {
                  key: e._id,
                  hotel: e,
                  editOutlet: E,
                  fetchGroups: f,
                  fetchClients: b,
                });
              })
            )
          );
        },
        Y = a(38),
        Q = a.n(Y),
        K = function (e) {
          var t = Object(l.useContext)(N),
            a = Object(l.useState)([]),
            n = Object(m.a)(a, 2),
            c = (n[0], n[1]),
            o = Object(l.useState)(""),
            s = Object(m.a)(o, 2),
            i = s[0],
            u = s[1];
          Object(l.useEffect)(function () {
            !(function () {
              var e = Object(p.a)(
                d.a.mark(function e() {
                  var t, a;
                  return d.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              fetch("http://localhost:5002/users", {
                                method: "GET",
                                headers: {
                                  "Content-Type": "application/json",
                                  secret_token:
                                    localStorage.getItem("JWtToken"),
                                },
                              })
                            );
                          case 3:
                            if ((t = e.sent).ok) {
                              e.next = 6;
                              break;
                            }
                            throw new Error("Something went wrong!");
                          case 6:
                            return (e.next = 8), t.json();
                          case 8:
                            (a = e.sent), c(a), (e.next = 14);
                            break;
                          case 12:
                            (e.prev = 12), (e.t0 = e.catch(0));
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 12]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })()();
          }, []);
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              "div",
              { className: "general-margin mt-5" },
              r.a.createElement(
                "div",
                { className: "".concat(Q.a.panel, " p-3 shadow") },
                r.a.createElement(
                  "header",
                  { className: Q.a.header },
                  r.a.createElement(
                    "div",
                    {
                      className:
                        "row justify-content-between align-items-center",
                    },
                    " ",
                    r.a.createElement(
                      "div",
                      { className: "col-auto" },
                      r.a.createElement("h2", null, "All Clients")
                    ),
                    r.a.createElement(
                      "div",
                      {
                        className:
                          "col-auto d-flex justify-content-start align-items-center",
                      },
                      r.a.createElement(M, {
                        edit: null,
                        fetchClients: function () {
                          u("now");
                        },
                      }),
                      r.a.createElement(
                        "button",
                        {
                          className: "btn btn-sm btn-danger ml-2",
                          onClick: function () {
                            t.handleAppView("new-outlet-form");
                          },
                          style: {
                            borderRadius: "20px",
                            height: "50px",
                            padding: "0px 20px",
                          },
                        },
                        "+ New Outlet"
                      )
                    )
                  ),
                  r.a.createElement("hr", null),
                  r.a.createElement(
                    "footer",
                    null,
                    r.a.createElement(
                      "div",
                      {
                        className: "row align-items-center px-4 ".concat(
                          Q.a.headingbar
                        ),
                      },
                      r.a.createElement(
                        "div",
                        { className: "col-4" },
                        r.a.createElement("h6", null, "Hotel Name")
                      ),
                      r.a.createElement(
                        "div",
                        { className: "col-4" },
                        r.a.createElement("h6", null, "SOA Mail")
                      ),
                      r.a.createElement(
                        "div",
                        { className: "col-4" },
                        r.a.createElement("h6", null, "Action")
                      )
                    )
                  )
                ),
                r.a.createElement(X, {
                  refresh: i,
                  editOutlet: function (t) {
                    e.editOutlet(t);
                  },
                  fetchGroups: function () {
                    e.fetchGroups();
                  },
                })
              )
            )
          );
        },
        $ = a(39),
        ee = a.n($),
        te = a(85),
        ae = a.n(te),
        ne = function (e) {
          var t = Object(l.useContext)(N),
            a = Object(l.useState)([]),
            n = Object(m.a)(a, 2),
            c = n[0],
            o = n[1],
            s = Object(l.useState)(),
            i = Object(m.a)(s, 2);
          i[0], i[1];
          Object(l.useEffect)(function () {
            !(function () {
              var e = Object(p.a)(
                d.a.mark(function e() {
                  var t, a;
                  return d.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              fetch("http://localhost:5002/users", {
                                method: "GET",
                                headers: {
                                  "Content-Type": "application/json",
                                  secret_token:
                                    localStorage.getItem("JWtToken"),
                                },
                              })
                            );
                          case 3:
                            if ((t = e.sent).ok) {
                              e.next = 6;
                              break;
                            }
                            throw new Error("Something went wrong!");
                          case 6:
                            return (e.next = 8), t.json();
                          case 8:
                            (a = e.sent), o(a), (e.next = 14);
                            break;
                          case 12:
                            (e.prev = 12), (e.t0 = e.catch(0));
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 12]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })()();
          }, []);
          var u = function (a) {
            var n = c.filter(function (e) {
              return e._id == a.target.value;
            });
            e.editUser({ user: n[0], action: "edit" }),
              t.handleAppView("user-details");
          };
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              "table",
              { className: "table ".concat(ae.a.table) },
              r.a.createElement(
                "thead",
                { className: "thead-light" },
                r.a.createElement(
                  "tr",
                  null,
                  r.a.createElement(
                    "th",
                    { scope: "col" },
                    "#",
                    r.a.createElement("i", {
                      className: "bi bi-sort-numeric-up",
                    })
                  ),
                  r.a.createElement(
                    "th",
                    { scope: "col" },
                    "Name",
                    r.a.createElement("i", {
                      className: "bi bi-sort-numeric-up",
                    })
                  ),
                  r.a.createElement("th", { scope: "col" }, "Account Status"),
                  r.a.createElement("th", { scope: "col" }, "Job Status"),
                  r.a.createElement("th", { scope: "col" }, "Action")
                )
              ),
              r.a.createElement(
                "tbody",
                null,
                c.map(function (e) {
                  return r.a.createElement(
                    "tr",
                    { key: e._id },
                    r.a.createElement("th", { scope: "row" }, "1055"),
                    r.a.createElement("td", null, e.fullName),
                    r.a.createElement("td", null, e.accountStatus),
                    r.a.createElement("td", null, "Active"),
                    r.a.createElement(
                      "td",
                      null,
                      r.a.createElement(
                        "button",
                        {
                          className: "btn btn-sm btn-danger mr-1",
                          onClick: u,
                          value: e._id,
                        },
                        "Edit"
                      ),
                      r.a.createElement(
                        "button",
                        { className: "btn btn-sm btn-danger mr-1" },
                        "Deactivate"
                      ),
                      r.a.createElement(
                        "button",
                        { className: "btn btn-sm btn-danger mr-1" },
                        "Delete"
                      )
                    )
                  );
                })
              )
            )
          );
        },
        le = function (e) {
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              "div",
              { className: "general-margin" },
              r.a.createElement(
                "div",
                { className: "".concat(ee.a.panel, "  shadow") },
                r.a.createElement(
                  "header",
                  { className: ee.a.header },
                  r.a.createElement(
                    "div",
                    {
                      className:
                        "row justify-content-between align-items-center",
                    },
                    " ",
                    r.a.createElement(
                      "div",
                      {
                        className:
                          "col-auto d-flex justify-content-center align-items-center ",
                      },
                      r.a.createElement(
                        "h3",
                        { className: "d-inline" },
                        "Users"
                      ),
                      r.a.createElement(
                        "h3",
                        { className: ee.a.total },
                        " [2055]"
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "col-auto" },
                      r.a.createElement("input", {
                        className: "form-control",
                        placeholder: "search",
                      })
                    )
                  ),
                  r.a.createElement("hr", null)
                ),
                r.a.createElement(ne, {
                  editUser: function (t) {
                    e.editUser(t);
                  },
                })
              )
            )
          );
        },
        re = function (e) {
          var t = Object(l.useState)([]),
            a = Object(m.a)(t, 2),
            n = a[0],
            c = a[1],
            o = Object(l.useState)(e.group.groupTitle),
            s = Object(m.a)(o, 2),
            i = s[0],
            u = s[1],
            E = Object(l.useState)("d"),
            f = Object(m.a)(E, 2),
            b = (f[0], f[1], Object(l.useState)("e")),
            h = Object(m.a)(b, 2),
            v = (h[0], h[1], Object(l.useState)([])),
            N = Object(m.a)(v, 2),
            g = N[0],
            w = N[1];
          Object(l.useEffect)(function () {
            !(function () {
              var e = Object(p.a)(
                d.a.mark(function e() {
                  var t, a;
                  return d.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              fetch("http://localhost:5002/users", {
                                method: "GET",
                                headers: {
                                  "Content-Type": "application/json",
                                  secret_token:
                                    localStorage.getItem("JWtToken"),
                                },
                              })
                            );
                          case 3:
                            if ((t = e.sent).ok) {
                              e.next = 6;
                              break;
                            }
                            throw new Error("Something went wrong!");
                          case 6:
                            return (e.next = 8), t.json();
                          case 8:
                            (a = e.sent), w(a), (e.next = 14);
                            break;
                          case 12:
                            (e.prev = 12), (e.t0 = e.catch(0));
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 12]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })()();
          }, []),
            Object(l.useEffect)(
              function () {
                var t = [];
                e.group.groupMembers.map(function (e) {
                  g.map(function (a) {
                    a._id == e && t.push(a);
                  });
                }),
                  c(t);
              },
              [g]
            );
          C.a.defaults.headers.common.secret_token = "".concat(
            localStorage.getItem("JWtToken")
          );
          var S = (function () {
              var t = Object(p.a)(
                d.a.mark(function t() {
                  var a;
                  return d.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          (a = []),
                            n.map(function (e) {
                              a.push(e._id);
                            }),
                            C.a
                              .patch("http://localhost:5002/groupList", {
                                outletId: e.group.outletId,
                                groupId: e.group._id,
                                title: i,
                                users: a,
                              })
                              .then(function (e) {})
                              .then(function () {
                                e.fetchGroups();
                              });
                        case 3:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function () {
                return t.apply(this, arguments);
              };
            })(),
            y = r.a.createElement(R, { selectedUsers: n });
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              "button",
              {
                type: "button",
                className: "btn btn-danger mx-2 btn-sm",
                "data-toggle": "modal",
                "data-target": "#staticBackdrop".concat(e.group._id),
              },
              "Edit"
            ),
            " ",
            r.a.createElement(
              "div",
              null,
              r.a.createElement(
                "div",
                {
                  className: "modal fade",
                  id: "staticBackdrop".concat(e.group._id),
                  "data-backdrop": "static",
                  "data-keyboard": "false",
                  tabIndex: "-1",
                  "aria-labelledby": "staticBackdropLabel".concat(e.group._id),
                  "aria-hidden": "true",
                },
                r.a.createElement(
                  "div",
                  { className: "modal-dialog ".concat(L.a.modal_lg) },
                  r.a.createElement(
                    "div",
                    { className: "modal-content" },
                    r.a.createElement(
                      "div",
                      { className: "modal-header " },
                      r.a.createElement(
                        "div",
                        {
                          className:
                            "row justify-content-between align-items-center",
                        },
                        r.a.createElement(
                          "div",
                          { className: "col" },
                          r.a.createElement(
                            "h5",
                            {
                              className: "modal-title",
                              id: "staticBackdropLabel".concat(e.group._id),
                            },
                            "New Group ",
                            r.a.createElement(
                              "span",
                              { className: "display-4" },
                              "5"
                            ),
                            r.a.createElement("span", { className: "ml-5" })
                          )
                        )
                      ),
                      r.a.createElement(
                        "button",
                        {
                          type: "button",
                          className: "close",
                          "data-dismiss": "modal",
                          "aria-label": "Close",
                        },
                        r.a.createElement(
                          "span",
                          { "aria-hidden": "true" },
                          "\xd7"
                        )
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "modal-body" },
                      r.a.createElement(
                        "div",
                        null,
                        r.a.createElement(
                          "div",
                          { className: "form-row mt-3" },
                          r.a.createElement(
                            "div",
                            {
                              className:
                                "form-group col d-flex justify-content-center align-items-center",
                            },
                            r.a.createElement(
                              "label",
                              { htmlFor: "exampleFormControlTextarea1" },
                              "Date"
                            ),
                            r.a.createElement("input", {
                              type: "date",
                              className: L.a.NGFDate,
                            })
                          ),
                          r.a.createElement(
                            "div",
                            {
                              className:
                                "form-group d-flex justify-content-center align-items-center col",
                            },
                            r.a.createElement(
                              "label",
                              { htmlFor: "exampleFormControlTextarea1" },
                              "Time"
                            ),
                            r.a.createElement("input", {
                              type: "time",
                              className: L.a.NGFTime,
                            })
                          )
                        ),
                        " ",
                        r.a.createElement(
                          "div",
                          { className: "form-row ".concat(L.a.next) },
                          r.a.createElement(
                            "div",
                            { className: "col" },
                            r.a.createElement(
                              "label",
                              { htmlFor: "ourletname" },
                              "Group Title"
                            ),
                            r.a.createElement("input", {
                              id: "outletname",
                              type: "text",
                              className: "form-control ",
                              placeholder: "Eg. Group ",
                              onChange: function (e) {
                                u(e.target.value);
                              },
                              value: i,
                            })
                          )
                        )
                      ),
                      r.a.createElement(
                        "div",
                        { className: "form-row ".concat(L.a.next) },
                        r.a.createElement(
                          "div",
                          { className: "form-group col" },
                          r.a.createElement(
                            "label",
                            { htmlFor: "inputState" },
                            "Select Users"
                          ),
                          r.a.createElement(O.a, {
                            className: ""
                              .concat(L.a.searchBox, " ")
                              .concat(L.a.optionContainer, " ")
                              .concat(L.a.option, " ")
                              .concat(L.a.multiselectContainer, " ")
                              .concat(L.a.ighlightOption),
                            options: g,
                            selectedValues: n,
                            onSelect: function (e) {
                              c(e);
                            },
                            onRemove: function (e) {
                              c(e);
                            },
                            selectionLimit: 50,
                            displayValue: "fullName",
                          })
                        )
                      )
                    ),
                    y,
                    r.a.createElement(
                      "div",
                      { className: "modal-footer" },
                      r.a.createElement(
                        "button",
                        { type: "button", className: "btn btn-secondary" },
                        "Cancel"
                      ),
                      r.a.createElement(
                        "button",
                        {
                          type: "button",
                          onClick: S,
                          className: "btn btn-primary",
                          "data-dismiss": "modal",
                        },
                        "Submit"
                      )
                    )
                  )
                )
              )
            )
          );
        },
        ce =
          (a(139),
          function (e) {
            C.a.defaults.headers.common.secret_token = "".concat(
              localStorage.getItem("JWtToken")
            );
            var t = function (t) {
              C.a
                .delete(
                  "http://localhost:5002/groupList/".concat(t.target.value)
                )
                .then(function (e) {})
                .then(function () {
                  e.fetchGroups();
                });
            };
            return r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(
                "div",
                null,
                r.a.createElement(
                  "table",
                  { className: "table" },
                  r.a.createElement(
                    "thead",
                    { className: "thead-light" },
                    r.a.createElement(
                      "tr",
                      null,
                      r.a.createElement("th", { scope: "col" }, "#"),
                      r.a.createElement("th", { scope: "col" }, "Name"),
                      r.a.createElement("th", { scope: "col" }, "Members"),
                      r.a.createElement("th", { scope: "col" }, "Date"),
                      r.a.createElement("th", { scope: "col" }, "Action")
                    )
                  ),
                  r.a.createElement(
                    "tbody",
                    null,
                    e.groups.map(function (e) {
                      return r.a.createElement(
                        "tr",
                        { key: e._id },
                        r.a.createElement("th", { scope: "row" }, "1"),
                        r.a.createElement("td", null, e.groupTitle),
                        r.a.createElement("td", null, "15"),
                        r.a.createElement("td", null, "12-2-2022"),
                        r.a.createElement(
                          "td",
                          null,
                          r.a.createElement(
                            "div",
                            { className: "d-flex align-items-center " },
                            r.a.createElement(re, { group: e }),
                            r.a.createElement(
                              "button",
                              {
                                className: "btn btn-danger mx-2 btn-sm",
                                onClick: t,
                                value: e._id,
                              },
                              "Delete"
                            )
                          )
                        )
                      );
                    })
                  )
                )
              )
            );
          }),
        oe = a(6),
        me = a.n(oe),
        se = a(22),
        ie = a.n(se),
        ue = function (e) {
          C.a.defaults.headers.common.secret_token = "".concat(
            localStorage.getItem("JWtToken")
          );
          var t = Object(l.useContext)(N),
            a = Object(l.useState)(!0),
            n = Object(m.a)(a, 2),
            c = n[0],
            o = n[1],
            s = Object(l.useState)([]),
            i = Object(m.a)(s, 2);
          i[0], i[1];
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              "form",
              null,
              r.a.createElement(
                "div",
                { className: "general-margin" },
                r.a.createElement(
                  "div",
                  { className: "".concat(ie.a.panel, " p-3 shadow") },
                  r.a.createElement(
                    "header",
                    { className: ie.a.header },
                    r.a.createElement(
                      "div",
                      {
                        className:
                          "row justify-content-between align-items-center",
                      },
                      " ",
                      r.a.createElement(
                        "div",
                        { className: "col-auto" },
                        r.a.createElement("h2", { className: "d-inline" })
                      ),
                      r.a.createElement(
                        "div",
                        { className: "col-auto" },
                        r.a.createElement(
                          "button",
                          {
                            type: "button",
                            onClick: function () {
                              o(!c);
                            },
                            className: "btn btn-danger btn-small",
                          },
                          "Edit"
                        )
                      )
                    ),
                    r.a.createElement("hr", null)
                  ),
                  r.a.createElement(
                    "div",
                    { className: "form-row" },
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputEmail4" },
                        "Join Date"
                      ),
                      r.a.createElement("input", {
                        type: "date",
                        className: "form-control",
                        id: "inputEmail4",
                        disabled: c,
                      })
                    ),
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputPassword4" },
                        "Deaks ID"
                      ),
                      r.a.createElement("input", {
                        type: "number",
                        className: "form-control",
                        id: "inputPassword4",
                        disabled: c,
                      })
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "form-row" },
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputEmail4" },
                        "Full Name"
                      ),
                      r.a.createElement("input", {
                        type: "text",
                        className: "form-control",
                        id: "inputEmail4",
                        defaultValue: e.userId.user.fullName,
                        disabled: c,
                      })
                    ),
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputEmail4" },
                        "Booking Name"
                      ),
                      r.a.createElement("input", {
                        type: "text",
                        className: "form-control",
                        id: "inputEmail4",
                        disabled: c,
                      })
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "form-row" },
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputEmail4" },
                        "Contact Number"
                      ),
                      r.a.createElement("input", {
                        type: "email",
                        className: "form-control",
                        id: "inputEmail4",
                        defaultValue: "Male",
                        disabled: c,
                      })
                    ),
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputEmail4" },
                        "Email"
                      ),
                      r.a.createElement("input", {
                        type: "email",
                        className: "form-control",
                        id: "inputEmail4",
                        defaultValue: "Male",
                        disabled: c,
                      })
                    )
                  ),
                  r.a.createElement("hr", { className: "my-5" }),
                  r.a.createElement(
                    "div",
                    { className: "form-row" },
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputCity" },
                        "Unit Number"
                      ),
                      r.a.createElement("input", {
                        type: "text",
                        className: "form-control",
                        id: "inputCity",
                        disabled: c,
                      })
                    ),
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputCity" },
                        "City"
                      ),
                      r.a.createElement("input", {
                        type: "text",
                        className: "form-control",
                        id: "inputCity",
                        disabled: c,
                      })
                    ),
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputState" },
                        "Street"
                      ),
                      r.a.createElement(
                        "select",
                        {
                          id: "inputState",
                          className: "form-control",
                          disabled: c,
                        },
                        r.a.createElement("option", null, "Choose..."),
                        r.a.createElement("option", null, "...")
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputZip" },
                        "Zip"
                      ),
                      r.a.createElement("input", {
                        type: "text",
                        className: "form-control",
                        id: "inputZip",
                        disabled: c,
                      })
                    )
                  ),
                  r.a.createElement("hr", { className: "my-5" }),
                  r.a.createElement(
                    "div",
                    { className: "form-row" },
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputEmail4" },
                        "Sex"
                      ),
                      r.a.createElement("input", {
                        type: "email",
                        className: "form-control",
                        id: "inputEmail4",
                        defaultValue: "Male",
                        disabled: c,
                      })
                    ),
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputEmail4" },
                        "DOB"
                      ),
                      r.a.createElement("input", {
                        type: "email",
                        className: "form-control",
                        id: "inputEmail4",
                        defaultValue: "Male",
                        disabled: c,
                      })
                    )
                  ),
                  r.a.createElement("hr", { className: "my-5" }),
                  r.a.createElement(
                    "div",
                    { className: "form-row" },
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputEmail4" },
                        "NRIC Number"
                      ),
                      r.a.createElement("input", {
                        type: "email",
                        className: "form-control",
                        id: "inputEmail4",
                        defaultValue: "General",
                        disabled: c,
                      })
                    ),
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputEmail4" },
                        "PayNow Number"
                      ),
                      r.a.createElement("input", {
                        type: "email",
                        className: "form-control",
                        id: "inputEmail4",
                        defaultValue: "Not Active",
                        disabled: c,
                      })
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "form-row" },
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputEmail4" },
                        "Bank Name"
                      ),
                      r.a.createElement("input", {
                        type: "email",
                        className: "form-control",
                        id: "inputEmail4",
                        defaultValue: "General",
                        disabled: c,
                      })
                    ),
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputEmail4" },
                        "Bank Account Number"
                      ),
                      r.a.createElement("input", {
                        type: "email",
                        className: "form-control",
                        id: "inputEmail4",
                        defaultValue: "Not Active",
                        disabled: c,
                      })
                    )
                  ),
                  r.a.createElement("hr", { className: "my-5" }),
                  r.a.createElement(
                    "div",
                    { className: "form-row" },
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputEmail4" },
                        "Emargency Contact Number"
                      ),
                      r.a.createElement("input", {
                        type: "email",
                        className: "form-control",
                        id: "inputEmail4",
                        defaultValue: "General",
                        disabled: c,
                      })
                    ),
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputEmail4" },
                        "Emargency Contact Name"
                      ),
                      r.a.createElement("input", {
                        type: "email",
                        className: "form-control",
                        id: "inputEmail4",
                        defaultValue: "Not Active",
                        disabled: c,
                      })
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "form-row" },
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputEmail4" },
                        "Relation"
                      ),
                      r.a.createElement("input", {
                        type: "email",
                        className: "form-control",
                        id: "inputEmail4",
                        defaultValue: "General",
                        disabled: c,
                      })
                    )
                  ),
                  r.a.createElement("hr", { className: "my-5" }),
                  r.a.createElement(
                    "div",
                    { className: "form-row" },
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputEmail4" },
                        "Account Status"
                      ),
                      r.a.createElement("input", {
                        type: "email",
                        className: "form-control",
                        id: "inputEmail4",
                        defaultValue: e.userId.user.accountStatus,
                        disabled: c,
                      })
                    ),
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputEmail4" },
                        "Job Status"
                      ),
                      r.a.createElement("input", {
                        type: "email",
                        className: "form-control",
                        id: "inputEmail4",
                        defaultValue: e.userId.user.jobStatus,
                        disabled: c,
                      })
                    )
                  ),
                  r.a.createElement(
                    "button",
                    { type: "submit", className: "btn btn-primary" },
                    "Save"
                  ),
                  r.a.createElement(
                    "button",
                    {
                      type: "submit",
                      className: "btn btn-danger ml-3",
                      onClick: function () {
                        null != e.userId &&
                          "edit" === e.userId.action &&
                          (t.handleAppView("users"), t.handleContent(null));
                      },
                    },
                    "Cancel"
                  )
                )
              )
            )
          );
        },
        de = function () {
          var e = Object(l.useContext)(N),
            t = Object(l.useState)(""),
            a = Object(m.a)(t, 2),
            n = a[0],
            c = a[1],
            o = Object(l.useState)(""),
            s = Object(m.a)(o, 2),
            i = s[0],
            u = s[1],
            E = Object(l.useState)(""),
            f = Object(m.a)(E, 2),
            b = f[0],
            h = f[1],
            v = Object(l.useState)(""),
            g = Object(m.a)(v, 2),
            w = g[0],
            S = g[1],
            y = Object(l.useState)(""),
            j = Object(m.a)(y, 2),
            O = j[0],
            _ = j[1],
            k = Object(l.useState)([]),
            x = Object(m.a)(k, 2),
            C = (x[0], x[1], Object(l.useState)("")),
            F = Object(m.a)(C, 2),
            I = F[0],
            T = F[1],
            A = Object(l.useState)(""),
            L = Object(m.a)(A, 2),
            D = L[0],
            G = L[1],
            B = Object(l.useState)(""),
            V = Object(m.a)(B, 2),
            J = V[0],
            R = V[1],
            H = Object(l.useState)(""),
            q = Object(m.a)(H, 2),
            U = q[0],
            W = q[1],
            P = Object(l.useState)(""),
            M = Object(m.a)(P, 2),
            z = M[0],
            Z = M[1],
            X = Object(l.useState)([]),
            Y = Object(m.a)(X, 2),
            Q = Y[0],
            K = Y[1],
            $ = Object(l.useState)([]),
            ee = Object(m.a)($, 2),
            te = ee[0];
          ee[1];
          Object(l.useEffect)(function () {
            !(function () {
              var e = Object(p.a)(
                d.a.mark(function e() {
                  var t, a;
                  return d.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              fetch("http://localhost:5002/hotelList", {
                                method: "GET",
                                headers: {
                                  "Content-Type": "application/json",
                                  secret_token:
                                    localStorage.getItem("JWtToken"),
                                },
                              })
                            );
                          case 3:
                            if ((t = e.sent).ok) {
                              e.next = 6;
                              break;
                            }
                            throw new Error("Something went wrong!");
                          case 6:
                            return (e.next = 8), t.json();
                          case 8:
                            (a = e.sent), K(a), (e.next = 14);
                            break;
                          case 12:
                            (e.prev = 12), (e.t0 = e.catch(0));
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 12]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })()();
          }, []);
          var ae = (function () {
            var t = Object(p.a)(
              d.a.mark(function t(a) {
                var l, r, c;
                return d.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          a.preventDefault(),
                          e.handleAppView("clients"),
                          e.handleContent(null),
                          (l = {
                            title: I,
                            hotel: D,
                            address: z,
                            contact: J,
                            jobRemarks: w,
                            payment: O,
                            userGroups: te,
                            youtubeLink: U,
                          }),
                          (r = new FormData()),
                          Object.keys(n).map(function (e, t) {
                            r.append("outletImages", n[e]);
                          }),
                          Object.keys(i).map(function (e, t) {
                            r.append("groomingImages", i[e]);
                          }),
                          Object.keys(b).map(function (e, t) {
                            r.append("howToImages", b[e]);
                          }),
                          r.append("state", JSON.stringify(l)),
                          (t.next = 11),
                          fetch("http://localhost:5002/outletList", {
                            method: "POST",
                            body: r,
                            headers: {
                              secret_token: localStorage.getItem("JWtToken"),
                            },
                          })
                        );
                      case 11:
                        return (c = t.sent), (t.next = 14), c;
                      case 14:
                        t.sent;
                      case 15:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              "div",
              { className: "general-margin" },
              r.a.createElement(
                "form",
                { onSubmit: ae },
                r.a.createElement(
                  "div",
                  { className: "".concat(me.a.panel, " p-3 shadow") },
                  r.a.createElement(
                    "header",
                    { className: me.a.header },
                    r.a.createElement(
                      "div",
                      {
                        className:
                          "row justify-content-between align-items-center",
                      },
                      " ",
                      r.a.createElement(
                        "div",
                        { className: "col-auto" },
                        r.a.createElement(
                          "h4",
                          { className: "d-inline my-3" },
                          "Outlet Details"
                        )
                      )
                    ),
                    r.a.createElement("hr", null)
                  ),
                  r.a.createElement(
                    "div",
                    null,
                    r.a.createElement(
                      "div",
                      { className: "form-row" },
                      r.a.createElement(
                        "div",
                        { className: "col" },
                        r.a.createElement(
                          "label",
                          { htmlFor: "ourletname" },
                          "Outlet Name"
                        ),
                        r.a.createElement("input", {
                          id: "outletname",
                          type: "text",
                          className: "form-control ",
                          placeholder: "Eg. Banquet..",
                          onChange: function (e) {
                            T(e.target.value);
                          },
                          required: !0,
                        })
                      ),
                      r.a.createElement(
                        "div",
                        { className: "col" },
                        r.a.createElement(
                          "label",
                          { htmlFor: "hotelname" },
                          "Select Hotel"
                        ),
                        r.a.createElement(
                          "select",
                          {
                            name: "hotelDetails",
                            id: "hotelname",
                            className: "form-control",
                            onChange: function (e) {
                              G(e.target.value);
                            },
                            required: !0,
                          },
                          " ",
                          r.a.createElement("option", null),
                          Q.map(function (e) {
                            return r.a.createElement(
                              "option",
                              { key: e._id, value: e._id },
                              e.hotelName
                            );
                          })
                        )
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: me.a.next },
                      r.a.createElement(
                        "div",
                        { className: "form-row" },
                        r.a.createElement(
                          "div",
                          { className: "col" },
                          r.a.createElement("textarea", {
                            type: "text",
                            className: "form-control ",
                            placeholder: "Billing Address",
                            onChange: function (e) {
                              Z(e.target.value);
                            },
                            required: !0,
                          })
                        )
                      )
                    ),
                    r.a.createElement(
                      "div",
                      null,
                      r.a.createElement(
                        "div",
                        { className: me.a.next },
                        r.a.createElement(
                          "div",
                          { className: "form-row" },
                          r.a.createElement(
                            "div",
                            { className: "col" },
                            r.a.createElement("input", {
                              type: "Number",
                              className: "form-control ",
                              placeholder: "Contact Number",
                              onChange: function (e) {
                                R(e.target.value);
                              },
                              value: J,
                            })
                          ),
                          r.a.createElement(
                            "div",
                            { className: "col" },
                            r.a.createElement("input", {
                              type: "Number",
                              className: "form-control ",
                              placeholder: "Youtube Link ",
                              onChange: function (e) {
                                W(e.target.value);
                              },
                              value: U,
                            })
                          )
                        )
                      ),
                      r.a.createElement(
                        "div",
                        { className: "form-row mt-3" },
                        r.a.createElement(
                          "div",
                          { className: "col" },
                          r.a.createElement(
                            "label",
                            { htmlFor: "ourletname" },
                            "Job Remarks"
                          ),
                          r.a.createElement("textarea", {
                            id: "outletname",
                            type: "text",
                            rows: 5,
                            className: "form-control ",
                            placeholder: "Eg. Banquet..",
                            onChange: function (e) {
                              S(e.target.value);
                            },
                            value: w,
                            required: !0,
                          })
                        )
                      ),
                      r.a.createElement(
                        "div",
                        { className: "form-row mt-3" },
                        r.a.createElement(
                          "div",
                          { className: "col" },
                          r.a.createElement(
                            "label",
                            { htmlFor: "ourletname" },
                            "Payment"
                          ),
                          r.a.createElement("textarea", {
                            id: "outletname",
                            type: "text",
                            rows: 5,
                            className: "form-control ",
                            placeholder: "Eg. Banquet..",
                            onChange: function (e) {
                              _(e.target.value);
                            },
                            value: O,
                            required: !0,
                          })
                        )
                      ),
                      r.a.createElement("div", { className: "mt-3" }),
                      r.a.createElement(
                        "div",
                        { className: "form-group ".concat(me.a.next) },
                        r.a.createElement(
                          "label",
                          { htmlFor: "exampleFormControlFile1" },
                          "Outlet Images"
                        ),
                        r.a.createElement("input", {
                          type: "file",
                          onChange: function (e) {
                            c(e.target.files);
                            var t = document.getElementById("previewImages");
                            Array.from(e.target.files).forEach(function (e) {
                              for (var a = new FileReader(); t.firstChild; )
                                t.removeChild(t.firstChild);
                              a.abort(),
                                (a.onload = function () {
                                  var e = new Image();
                                  (e.src = String(a.result)),
                                    e.classList.add(
                                      "".concat(me.a.previewImage)
                                    ),
                                    t.appendChild(e);
                                }),
                                a.readAsDataURL(e);
                            });
                          },
                          multiple: !0,
                          className: "form-control-file",
                          id: "exampleFormControlFile1",
                          accept: "image/png, image/jpeg ,image/jpg",
                          required: !0,
                        })
                      )
                    ),
                    r.a.createElement("div", { id: "previewImages" }),
                    r.a.createElement("hr", { className: "mt-5" }),
                    r.a.createElement(
                      "div",
                      null,
                      r.a.createElement(
                        "div",
                        { className: "form-group ".concat(me.a.next) },
                        r.a.createElement(
                          "label",
                          { htmlFor: "exampleFormControlFile1" },
                          "Grooming"
                        ),
                        r.a.createElement("input", {
                          type: "file",
                          onChange: function (e) {
                            u(e.target.files);
                            var t = document.getElementById("previewGrooming");
                            Array.from(e.target.files).forEach(function (e) {
                              for (var a = new FileReader(); t.firstChild; )
                                t.removeChild(t.firstChild);
                              a.abort(),
                                (a.onload = function () {
                                  var e = new Image();
                                  (e.src = String(a.result)),
                                    e.classList.add(
                                      "".concat(me.a.previewImage)
                                    ),
                                    t.appendChild(e);
                                }),
                                a.readAsDataURL(e);
                            });
                          },
                          multiple: !0,
                          className: "form-control-file",
                          id: "exampleFormControlFile1",
                          accept: "image/png, image/jpeg ,image/jpg",
                          required: !0,
                        })
                      )
                    ),
                    r.a.createElement("div", { id: "previewGrooming" }),
                    r.a.createElement("hr", { className: "mt-5" }),
                    r.a.createElement(
                      "div",
                      null,
                      r.a.createElement(
                        "div",
                        { className: "form-group ".concat(me.a.next) },
                        r.a.createElement(
                          "label",
                          { htmlFor: "exampleFormControlFile1" },
                          "How to report"
                        ),
                        r.a.createElement("input", {
                          type: "file",
                          onChange: function (e) {
                            h(e.target.files);
                            var t = document.getElementById("previewHowTo");
                            Array.from(e.target.files).forEach(function (e) {
                              for (var a = new FileReader(); t.firstChild; )
                                t.removeChild(t.firstChild);
                              a.abort(),
                                (a.onload = function () {
                                  var e = new Image();
                                  (e.src = String(a.result)),
                                    e.classList.add(
                                      "".concat(me.a.previewImage)
                                    ),
                                    t.appendChild(e);
                                }),
                                a.readAsDataURL(e);
                            });
                          },
                          multiple: !0,
                          className: "form-control-file",
                          id: "exampleFormControlFile1",
                          accept: "image/png, image/jpeg ,image/jpg",
                          required: !0,
                        })
                      )
                    ),
                    r.a.createElement("div", { id: "previewHowTo" }),
                    r.a.createElement("hr", { className: "mt-5" }),
                    r.a.createElement("hr", { className: "mt-5" }),
                    r.a.createElement(
                      "footer",
                      { className: " ".concat(me.a.footer, " ") },
                      r.a.createElement(
                        "div",
                        { className: "mx-auto" },
                        r.a.createElement(
                          "button",
                          {
                            type: "button",
                            onClick: function () {
                              e.handleAppView("clients"), e.handleContent(null);
                            },
                            className: "btn btn-secondary mx-1",
                          },
                          "Cancel"
                        ),
                        r.a.createElement(
                          "button",
                          { type: "submit", className: "btn btn-primary mx-1" },
                          "Submit"
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        },
        pe = function (e) {
          var t = Object(l.useContext)(N),
            a = Object(l.useState)([]),
            n = Object(m.a)(a, 2),
            c = n[0],
            o = (n[1], Object(l.useState)([])),
            s = Object(m.a)(o, 2),
            i = s[0];
          s[1];
          Object(l.useEffect)(function () {
            C()("http://localhost:5002/users")
              .then(function (e) {})
              .then(function () {});
          }, []);
          var u = function (a) {
            var n = c.filter(function (e) {
                return e._id == a.target.value;
              }),
              l = i.filter(function (e) {
                return e._id == n[0].userId;
              });
            e.verifyUser({ form: n[0], user: l[0] }),
              t.handleAppView("verify-user-details");
          };
          return (
            (C.a.defaults.headers.common.secret_token = "".concat(
              localStorage.getItem("JWtToken")
            )),
            Object(l.useEffect)(function () {
              C()("http://localhost:5002/submit")
                .then(function (e) {})
                .then(function () {});
            }, []),
            r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(
                "div",
                null,
                r.a.createElement(
                  "table",
                  { className: "table" },
                  r.a.createElement(
                    "thead",
                    { className: "thead-light" },
                    r.a.createElement(
                      "tr",
                      null,
                      r.a.createElement("th", { scope: "col" }, "#"),
                      r.a.createElement("th", { scope: "col" }, "Name"),
                      r.a.createElement("th", { scope: "col" }, "Date"),
                      r.a.createElement("th", { scope: "col" }, "status"),
                      r.a.createElement("th", { scope: "col" }, "Action")
                    )
                  ),
                  r.a.createElement(
                    "tbody",
                    null,
                    c.map(function (e) {
                      return r.a.createElement(
                        "tr",
                        { key: e._id },
                        r.a.createElement("th", { scope: "row" }, "1"),
                        r.a.createElement("td", null, e.fullName),
                        r.a.createElement("td", null, "12-05-2022"),
                        r.a.createElement("td", null, e.accountStatus),
                        r.a.createElement(
                          "td",
                          null,
                          r.a.createElement(
                            "button",
                            {
                              className: "btn btn-danger btn-sm mx-2",
                              onClick: u,
                              value: e._id,
                            },
                            "Open"
                          ),
                          r.a.createElement(
                            "button",
                            { className: "btn btn-danger mx-2 btn-sm" },
                            "Delete"
                          )
                        )
                      );
                    })
                  )
                )
              )
            )
          );
        },
        Ee = a(49),
        fe = a.n(Ee),
        be = a(40),
        he = a.n(be),
        ve = function () {
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              "button",
              {
                type: "button",
                className: "btn btn-sm btn-danger ml-2",
                "data-toggle": "modal",
                "data-target": "#staticBackdropCustomNotification",
              },
              "+ New Custom Notification"
            ),
            " ",
            r.a.createElement(
              "form",
              null,
              r.a.createElement(
                "div",
                {
                  className: "modal fade",
                  id: "staticBackdropCustomNotification",
                  "data-backdrop": "static",
                  "data-keyboard": "false",
                  tabIndex: "-1",
                  "aria-labelledby": "staticBackdropLabelCustomNotification",
                  "aria-hidden": "true",
                },
                r.a.createElement(
                  "div",
                  { className: "modal-dialog modal-lg" },
                  r.a.createElement(
                    "div",
                    { className: "modal-content" },
                    r.a.createElement(
                      "div",
                      { className: "modal-header" },
                      r.a.createElement(
                        "h5",
                        {
                          className: "modal-title",
                          id: "staticBackdropLabelCustomNotification",
                        },
                        "New Custom Notification"
                      ),
                      r.a.createElement(
                        "button",
                        {
                          type: "button",
                          className: "close",
                          "data-dismiss": "modal",
                          "aria-label": "Close",
                        },
                        r.a.createElement(
                          "span",
                          { "aria-hidden": "true" },
                          "\xd7"
                        )
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "modal-body" },
                      r.a.createElement(
                        "div",
                        { className: "form-row mt-3" },
                        r.a.createElement(
                          "div",
                          { className: "form-group col" },
                          r.a.createElement(
                            "label",
                            { htmlFor: "exampleFormControlTextarea1" },
                            "Select Date"
                          ),
                          r.a.createElement("input", {
                            type: "date",
                            className: he.a.CNFDateInput,
                          })
                        ),
                        r.a.createElement(
                          "div",
                          { className: "form-group col" },
                          r.a.createElement(
                            "label",
                            { htmlFor: "exampleFormControlTextarea1" },
                            "Time"
                          )
                        )
                      ),
                      " ",
                      r.a.createElement(
                        "div",
                        { className: "form-row mt-1" },
                        r.a.createElement(
                          "div",
                          { className: "form-group col" },
                          r.a.createElement(
                            "label",
                            { htmlFor: "exampleFormControlTextarea1" },
                            "Message"
                          ),
                          r.a.createElement("textarea", {
                            className: "form-control",
                            id: "exampleFormControlTextarea1",
                            rows: "3",
                          })
                        )
                      ),
                      r.a.createElement(
                        "div",
                        { className: "form-row mt-1" },
                        r.a.createElement(
                          "div",
                          { className: "form-group col" },
                          r.a.createElement(
                            "label",
                            { htmlFor: "exampleFormControlTextarea1" },
                            "End Time"
                          ),
                          r.a.createElement("input", {
                            type: "time",
                            className: he.a.CNFEndTime,
                          })
                        )
                      ),
                      r.a.createElement(
                        "div",
                        null,
                        r.a.createElement(
                          "header",
                          { className: "my-5 ".concat(he.a.header) },
                          r.a.createElement(
                            "div",
                            { className: "my-2" },
                            r.a.createElement("h5", null, "Options")
                          ),
                          r.a.createElement(
                            "div",
                            { className: "row justify-content-center" },
                            r.a.createElement(
                              "div",
                              { className: "col-auto mx-3" },
                              r.a.createElement(
                                "div",
                                { className: "form-check form-check-inline" },
                                r.a.createElement("input", {
                                  className: "form-check-input",
                                  type: "checkbox",
                                  id: "inlineCheckbox1",
                                  value: "Confirm",
                                }),
                                r.a.createElement(
                                  "label",
                                  {
                                    className: "form-check-label",
                                    htmlFor: "inlineCheckbox1",
                                  },
                                  "Confirm"
                                )
                              )
                            ),
                            r.a.createElement(
                              "div",
                              { className: "col-auto mx-3" },
                              r.a.createElement(
                                "div",
                                { className: "form-check form-check-inline" },
                                r.a.createElement("input", {
                                  className: "form-check-input",
                                  type: "checkbox",
                                  id: "inlineCheckbox2",
                                  value: "Decline",
                                }),
                                r.a.createElement(
                                  "label",
                                  {
                                    className: "form-check-label",
                                    htmlFor: "inlineCheckbox2",
                                  },
                                  "Decline"
                                )
                              )
                            ),
                            r.a.createElement(
                              "div",
                              { className: "col-auto mx-3" },
                              r.a.createElement(
                                "div",
                                { className: "form-check form-check-inline" },
                                r.a.createElement("input", {
                                  className: "form-check-input",
                                  type: "checkbox",
                                  id: "inlineCheckbox3",
                                  value: "Ignore",
                                }),
                                r.a.createElement(
                                  "label",
                                  {
                                    className: "form-check-label",
                                    htmlFor: "inlineCheckbox3",
                                  },
                                  "Ignore"
                                )
                              )
                            )
                          ),
                          r.a.createElement("div", { className: "form-row" })
                        )
                      ),
                      r.a.createElement(
                        "div",
                        { className: "form-row mt-1" },
                        r.a.createElement(
                          "div",
                          { className: "form-group col" },
                          r.a.createElement(
                            "label",
                            { htmlFor: "inputState" },
                            "Show Groups"
                          ),
                          r.a.createElement(
                            "select",
                            { id: "inputState", className: "form-control" },
                            r.a.createElement("option", null, "All"),
                            r.a.createElement("option", null, "Group 1"),
                            r.a.createElement("option", null, "Group 2")
                          )
                        )
                      ),
                      r.a.createElement(
                        "div",
                        { className: "form-row mt-1" },
                        r.a.createElement(
                          "div",
                          { className: "form-group col" },
                          r.a.createElement(
                            "label",
                            { htmlFor: "inputState" },
                            "Show Users"
                          ),
                          r.a.createElement("input", {
                            type: "text",
                            className: "form-control",
                          })
                        )
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "modal-footer" },
                      r.a.createElement(
                        "button",
                        {
                          type: "button",
                          className: "btn btn-secondary",
                          "data-dismiss": "modal",
                        },
                        "Cancel"
                      ),
                      r.a.createElement(
                        "button",
                        { type: "button", className: "btn btn-primary" },
                        "Submit"
                      )
                    )
                  )
                )
              )
            )
          );
        },
        Ne = function (e) {
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              "div",
              { className: "general-margin" },
              r.a.createElement(
                "div",
                { className: "".concat(fe.a.panel, " p-3 shadow") },
                r.a.createElement(
                  "header",
                  { className: fe.a.header },
                  r.a.createElement(
                    "div",
                    {
                      className:
                        "row justify-content-between align-items-center",
                    },
                    " ",
                    r.a.createElement(
                      "div",
                      { className: "col-auto" },
                      r.a.createElement(
                        "h2",
                        { className: "d-inline" },
                        "Notifications"
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "col-auto" },
                      r.a.createElement(
                        "div",
                        null,
                        r.a.createElement(ve, null)
                      )
                    )
                  ),
                  r.a.createElement("hr", null)
                ),
                r.a.createElement(
                  "div",
                  null,
                  r.a.createElement(
                    "div",
                    {
                      className: "row justify-content-start align-items-center",
                    },
                    r.a.createElement(
                      "div",
                      { className: "col-auto px-0" },
                      r.a.createElement(
                        "a",
                        { className: "pl-3" },
                        "New Form Submissions"
                      )
                    ),
                    r.a.createElement(
                      "div",
                      {
                        className:
                          "col-auto ml-auto d-flex justify-content-end",
                      },
                      r.a.createElement("input", {
                        placeholder: "search",
                        className: "form-control",
                      })
                    )
                  ),
                  r.a.createElement("hr", null)
                ),
                r.a.createElement(pe, {
                  verifyUser: function (t) {
                    e.verifyUser(t);
                  },
                })
              )
            )
          );
        },
        ge = (a(145), a(1)),
        we =
          (a(147),
          function () {
            var e = function (e) {
                alert(e);
              },
              t = Object(l.useState)(""),
              n = Object(m.a)(t, 2),
              c = n[0],
              o = n[1],
              s = Object(l.useState)(""),
              i = Object(m.a)(s, 2),
              u = i[0],
              d = i[1],
              p = Object(ge.g)();
            return r.a.createElement(
              r.a.Fragment,
              null,
              " ",
              r.a.createElement(
                "div",
                { className: " formWrapper" },
                r.a.createElement(
                  "div",
                  { className: "form-signin" },
                  r.a.createElement(
                    "form",
                    {
                      onSubmit: function (t) {
                        t.preventDefault(),
                          C.a
                            .post("http://localhost:5002/userLogin", {
                              email: c,
                              password: u,
                            })
                            .then(function (t) {
                              localStorage.setItem("JWtToken", t.data.token),
                                localStorage.setItem(
                                  "roles",
                                  t.data.user.roles
                                ),
                                localStorage.setItem(
                                  "email",
                                  t.data.user.email
                                ),
                                p("/home"),
                                e("User signin successful");
                            })
                            .catch(function (t) {
                              e("User signin failed");
                            });
                      },
                    },
                    r.a.createElement("img", {
                      className: "mb-4",
                      src: a(412),
                      alt: "",
                    }),
                    r.a.createElement(
                      "h1",
                      { className: " signinHeading" },
                      "Sign in"
                    ),
                    r.a.createElement(
                      "div",
                      { className: "form-floating" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "floatingInput" },
                        "Username"
                      ),
                      r.a.createElement("input", {
                        type: "text",
                        value: c,
                        onChange: function (e) {
                          o(e.target.value);
                        },
                        className: "form-control",
                        id: "floatingInput",
                        placeholder: "Username",
                      })
                    ),
                    r.a.createElement(
                      "div",
                      { className: "form-floating" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "floatingPassword" },
                        "Password"
                      ),
                      r.a.createElement("input", {
                        type: "password",
                        onChange: function (e) {
                          d(e.target.value);
                        },
                        className: "form-control",
                        id: "floatingPassword",
                        placeholder: "Password",
                        value: u,
                      })
                    ),
                    r.a.createElement("div", { className: "my-4" }),
                    r.a.createElement(
                      "button",
                      {
                        className: "w-100 btn btn-lg  loginButton",
                        type: "submit",
                      },
                      "Sign In"
                    ),
                    r.a.createElement(
                      "p",
                      { className: "mt-4 text-center mb-3 text-muted" },
                      "\xa9DeaksApp 2022"
                    )
                  )
                )
              )
            );
          }),
        Se = function (e) {
          var t = e.form.form,
            a = e.form.user;
          C.a.defaults.headers.common.secret_token = "".concat(
            localStorage.getItem("JWtToken")
          );
          var n = Object(l.useContext)(N),
            c = Object(l.useState)(!0),
            o = Object(m.a)(c, 2),
            s = o[0],
            i = o[1],
            u = Object(l.useState)(a.fullName),
            d = Object(m.a)(u, 2),
            p = d[0],
            E = (d[1], Object(l.useState)()),
            f = Object(m.a)(E, 2),
            b = f[0],
            h = (f[1], Object(l.useState)(t.bookingName)),
            v = Object(m.a)(h, 2),
            g = v[0],
            w = (v[1], Object(l.useState)(a.contact)),
            S = Object(m.a)(w, 2),
            y = S[0],
            j = (S[1], Object(l.useState)(a.email)),
            O = Object(m.a)(j, 2),
            _ = O[0],
            k = (O[1], Object(l.useState)(t.street)),
            x = Object(m.a)(k, 2),
            F = x[0],
            I = (x[1], Object(l.useState)(t.zipCode)),
            T = Object(m.a)(I, 2),
            A = T[0],
            L = (T[1], Object(l.useState)(t.city)),
            D = Object(m.a)(L, 2),
            G = D[0],
            B = (D[1], Object(l.useState)(t.unitNumber)),
            V = Object(m.a)(B, 2),
            J = V[0],
            R = (V[1], Object(l.useState)(t.sex)),
            H = Object(m.a)(R, 2),
            q = H[0],
            U = (H[1], Object(l.useState)(t.DOB)),
            W = Object(m.a)(U, 2),
            P = W[0],
            M = (W[1], Object(l.useState)(t.residentStatus)),
            z = Object(m.a)(M, 2),
            Z = z[0],
            X = (z[1], Object(l.useState)(t.FSInstitute)),
            Y = Object(m.a)(X, 2),
            Q = Y[0],
            K = (Y[1], Object(l.useState)(t.FSIDNumber)),
            $ = Object(m.a)(K, 2),
            ee = $[0],
            te = ($[1], Object(l.useState)(t.NRIC)),
            ae = Object(m.a)(te, 2),
            ne = ae[0],
            le = (ae[1], Object(l.useState)(t.PayNow)),
            re = Object(m.a)(le, 2),
            ce = re[0],
            oe = (re[1], Object(l.useState)(t.bankName)),
            me = Object(m.a)(oe, 2),
            se = me[0],
            ue = (me[1], Object(l.useState)(t.bankAccNo)),
            de = Object(m.a)(ue, 2),
            pe = de[0],
            Ee = (de[1], Object(l.useState)(a.verificationStatus)),
            fe = Object(m.a)(Ee, 2),
            be = fe[0],
            he = fe[1],
            ve = Object(l.useState)(t.emergencyContactNumber),
            Ne = Object(m.a)(ve, 2),
            ge = Ne[0],
            we = (Ne[1], Object(l.useState)(t.emergencyContactName)),
            Se = Object(m.a)(we, 2),
            ye = Se[0],
            je = (Se[1], Object(l.useState)(t.emergencyContactRelation)),
            Oe = Object(m.a)(je, 2),
            _e = Oe[0],
            ke = (Oe[1], Object(l.useState)(a.accountStatus)),
            xe = Object(m.a)(ke, 2),
            Ce = xe[0],
            Fe = xe[1],
            Ie = Object(l.useState)(a.jobStatus),
            Te = Object(m.a)(Ie, 2),
            Ae = Te[0];
          Te[1];
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              "form",
              {
                onSubmit: function (e) {
                  e.preventDefault();
                  var a = {
                    userId: t.userId,
                    fullName: p,
                    deaksId: b,
                    bookingName: g,
                    contact: y,
                    email: _,
                    street: F,
                    zipCode: A,
                    city: G,
                    unitNumber: J,
                    Sex: q,
                    DOB: P,
                    residentStatus: Z,
                    FSInstitute: Q,
                    FSIDNumber: ee,
                    NRIC: ne,
                    PayNow: ce,
                    bankName: se,
                    bankAccNo: pe,
                    emeregencyContactNumber: ge,
                    emeregencyContactName: ye,
                    emeregencyContactRelation: _e,
                    accountStatus: Ce,
                    jobStatus: Ae,
                    verificationStatus: be,
                  };
                  C.a
                    .patch("http://localhost:5002/users", {
                      verifiedUser: a,
                    })
                    .then(function (e) {});
                },
              },
              r.a.createElement(
                "div",
                { className: "general-margin" },
                r.a.createElement(
                  "div",
                  { className: "".concat(ie.a.panel, " p-3 shadow") },
                  r.a.createElement(
                    "header",
                    { className: ie.a.header },
                    r.a.createElement(
                      "div",
                      {
                        className:
                          "row justify-content-between align-items-center",
                      },
                      " ",
                      r.a.createElement(
                        "div",
                        { className: "col-auto" },
                        r.a.createElement("h2", { className: "d-inline" })
                      ),
                      r.a.createElement(
                        "div",
                        { className: "col-auto" },
                        r.a.createElement(
                          "button",
                          {
                            type: "button",
                            onClick: function () {
                              i(!s);
                            },
                            className: "btn btn-danger btn-small",
                          },
                          "Edit"
                        )
                      )
                    ),
                    r.a.createElement("hr", null)
                  ),
                  r.a.createElement(
                    "div",
                    { className: "form-row" },
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputEmail4" },
                        "Join Date"
                      ),
                      r.a.createElement("input", {
                        type: "date",
                        className: "form-control",
                        id: "inputEmail4",
                        disabled: s,
                      })
                    ),
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputPassword4" },
                        "Deaks ID"
                      ),
                      r.a.createElement("input", {
                        type: "number",
                        className: "form-control",
                        id: "inputPassword4",
                        disabled: s,
                      })
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "form-row" },
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputEmail4" },
                        "Full Name"
                      ),
                      r.a.createElement("input", {
                        type: "text",
                        className: "form-control",
                        id: "inputEmail4",
                        defaultValue: e.form.user.fullName,
                        disabled: s,
                      })
                    ),
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputEmail4" },
                        "Booking Name"
                      ),
                      r.a.createElement("input", {
                        type: "text",
                        className: "form-control",
                        id: "inputEmail4",
                        disabled: s,
                        value: g,
                      })
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "form-row" },
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputEmail4" },
                        "Contact Number"
                      ),
                      r.a.createElement("input", {
                        type: "email",
                        className: "form-control",
                        id: "inputEmail4",
                        defaultValue: "Male",
                        value: y,
                        disabled: s,
                      })
                    ),
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputEmail4" },
                        "Email"
                      ),
                      r.a.createElement("input", {
                        type: "email",
                        className: "form-control",
                        id: "inputEmail4",
                        defaultValue: "Male",
                        value: _,
                        disabled: s,
                      })
                    )
                  ),
                  r.a.createElement("hr", { className: "my-5" }),
                  r.a.createElement(
                    "div",
                    { className: "form-row" },
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputCity" },
                        "Unit Number"
                      ),
                      r.a.createElement("input", {
                        type: "text",
                        className: "form-control",
                        id: "inputCity",
                        disabled: s,
                        value: J,
                      })
                    ),
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputCity" },
                        "City"
                      ),
                      r.a.createElement("input", {
                        type: "text",
                        className: "form-control",
                        id: "inputCity",
                        disabled: s,
                        value: G,
                      })
                    ),
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputState" },
                        "Street"
                      ),
                      r.a.createElement("input", {
                        type: "text",
                        className: "form-control",
                        id: "inputZ",
                        disabled: s,
                        value: F,
                      })
                    ),
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputZip" },
                        "Zip"
                      ),
                      r.a.createElement("input", {
                        type: "text",
                        className: "form-control",
                        id: "inputZip",
                        disabled: s,
                        value: A,
                      })
                    )
                  ),
                  r.a.createElement("hr", { className: "my-5" }),
                  r.a.createElement(
                    "div",
                    { className: "form-row" },
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputEmail4" },
                        "Sex"
                      ),
                      r.a.createElement("input", {
                        type: "email",
                        className: "form-control",
                        id: "inputEmail4",
                        disabled: s,
                        value: q,
                      })
                    ),
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputEmail4" },
                        "DOB"
                      ),
                      r.a.createElement("input", {
                        type: "email",
                        className: "form-control",
                        id: "inputEmail4",
                        disabled: s,
                        value: P,
                      })
                    )
                  ),
                  r.a.createElement("hr", { className: "my-5" }),
                  r.a.createElement(
                    "div",
                    { className: "form-row" },
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputEmail4" },
                        "Resident Status"
                      ),
                      r.a.createElement("input", {
                        type: "email",
                        className: "form-control",
                        id: "inputEmail4",
                        disabled: s,
                        value: Z,
                      })
                    ),
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputEmail4" },
                        "Institute"
                      ),
                      r.a.createElement("input", {
                        type: "email",
                        className: "form-control",
                        id: "inputEmail4",
                        disabled: s,
                        value: Q,
                      })
                    ),
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputEmail4" },
                        "ID"
                      ),
                      r.a.createElement("input", {
                        type: "email",
                        className: "form-control",
                        id: "inputEmail4",
                        disabled: s,
                        value: ee,
                      })
                    )
                  ),
                  r.a.createElement("hr", { className: "my-5" }),
                  r.a.createElement(
                    "div",
                    { className: "form-row" },
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputEmail4" },
                        "NRIC Number"
                      ),
                      r.a.createElement("input", {
                        type: "email",
                        className: "form-control",
                        id: "inputEmail4",
                        disabled: s,
                        value: ne,
                      })
                    ),
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputEmail4" },
                        "PayNow Number"
                      ),
                      r.a.createElement("input", {
                        type: "email",
                        className: "form-control",
                        id: "inputEmail4",
                        disabled: s,
                        value: ce,
                      })
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "form-row" },
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputEmail4" },
                        "Bank Name"
                      ),
                      r.a.createElement("input", {
                        type: "email",
                        className: "form-control",
                        id: "inputEmail4",
                        disabled: s,
                        value: se,
                      })
                    ),
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputEmail4" },
                        "Bank Account Number"
                      ),
                      r.a.createElement("input", {
                        type: "email",
                        className: "form-control",
                        id: "inputEmail4",
                        disabled: s,
                        value: pe,
                      })
                    )
                  ),
                  r.a.createElement("hr", { className: "my-5" }),
                  r.a.createElement(
                    "div",
                    { className: "form-row" },
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputEmail4" },
                        "Emargency Contact Number"
                      ),
                      r.a.createElement("input", {
                        type: "email",
                        className: "form-control",
                        id: "inputEmail4",
                        disabled: s,
                        value: ge,
                      })
                    ),
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputEmail4" },
                        "Emargency Contact Name"
                      ),
                      r.a.createElement("input", {
                        type: "email",
                        className: "form-control",
                        id: "inputEmail4",
                        disabled: s,
                        value: ye,
                      })
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "form-row" },
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputEmail4" },
                        "Relation"
                      ),
                      r.a.createElement("input", {
                        type: "email",
                        className: "form-control",
                        id: "inputEmail4",
                        disabled: s,
                        value: _e,
                      })
                    )
                  ),
                  r.a.createElement("hr", { className: "my-5" }),
                  r.a.createElement(
                    "div",
                    { className: "form-row" },
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputEmail4" },
                        "Account Status"
                      ),
                      r.a.createElement("input", {
                        type: "email",
                        className: "form-control",
                        id: "inputEmail4",
                        onChange: function (e) {
                          Fe(e.target.value);
                        },
                        disabled: s,
                        value: Ce,
                      })
                    ),
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputEmail4" },
                        "Verification Status"
                      ),
                      r.a.createElement("input", {
                        type: "email",
                        className: "form-control",
                        id: "inputEmail4",
                        onChange: function (e) {
                          he(e.target.value);
                        },
                        disabled: s,
                        value: be,
                      })
                    ),
                    r.a.createElement(
                      "div",
                      { className: "form-group col" },
                      r.a.createElement(
                        "label",
                        { htmlFor: "inputEmail4" },
                        "Job Status"
                      ),
                      r.a.createElement("input", {
                        type: "email",
                        className: "form-control",
                        id: "inputEmail4",
                        disabled: s,
                        value: Ae,
                      })
                    )
                  ),
                  r.a.createElement(
                    "button",
                    { type: "submit", className: "btn btn-primary" },
                    "Approve"
                  ),
                  r.a.createElement(
                    "button",
                    {
                      type: "submit",
                      className: "btn btn-danger ml-3",
                      onClick: function () {
                        null != e.userId &&
                          "edit" === e.userId.action &&
                          (n.handleAppView("notifications"),
                          n.handleContent(null));
                      },
                    },
                    "Declian"
                  )
                )
              )
            )
          );
        },
        ye = function (e) {
          var t = Object(l.useContext)(N),
            a = e.outlet.outlet,
            n = Object(l.useState)([]),
            c = Object(m.a)(n, 2),
            o = c[0],
            s = c[1],
            i = Object(l.useState)([]),
            u = Object(m.a)(i, 2),
            E = u[0],
            f = u[1],
            b = Object(l.useState)([]),
            h = Object(m.a)(b, 2),
            v = h[0],
            g = h[1],
            w = Object(l.useState)(a.jobRemarks),
            S = Object(m.a)(w, 2),
            y = S[0],
            j = S[1],
            _ = Object(l.useState)(a.payment),
            k = Object(m.a)(_, 2),
            x = k[0],
            F = k[1],
            I = Object(l.useState)([]),
            T = Object(m.a)(I, 2),
            A = T[0],
            L = T[1],
            D = Object(l.useState)(a.outletName),
            G = Object(m.a)(D, 2),
            B = G[0],
            V = G[1],
            J = Object(l.useState)(a.hoteldetails),
            R = Object(m.a)(J, 2),
            q = R[0],
            U = R[1],
            W = Object(l.useState)([]),
            P = Object(m.a)(W, 2),
            M = P[0],
            z = P[1],
            Z = Object(l.useState)(a.outletAdminNo),
            X = Object(m.a)(Z, 2),
            Y = X[0],
            Q = X[1],
            K = Object(l.useState)(a.youtubeLink),
            $ = Object(m.a)(K, 2),
            ee = $[0],
            te = $[1],
            ae = Object(l.useState)(a.billingAddress),
            ne = Object(m.a)(ae, 2),
            le = ne[0],
            re = ne[1],
            oe = Object(l.useState)([]),
            se = Object(m.a)(oe, 2),
            ie = se[0],
            ue = se[1],
            de = Object(l.useState)([]),
            pe = Object(m.a)(de, 2),
            Ee = pe[0],
            fe = pe[1];
          C.a.defaults.headers.common.secret_token = "".concat(
            localStorage.getItem("JWtToken")
          );
          Object(l.useEffect)(function () {
            !(function () {
              var e = Object(p.a)(
                d.a.mark(function e() {
                  var t, a;
                  return d.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              fetch("http://localhost:5002/hotelList", {
                                method: "GET",
                                headers: {
                                  "Content-Type": "application/json",
                                  secret_token:
                                    localStorage.getItem("JWtToken"),
                                },
                              })
                            );
                          case 3:
                            if ((t = e.sent).ok) {
                              e.next = 6;
                              break;
                            }
                            throw new Error("Something went wrong!");
                          case 6:
                            return (e.next = 8), t.json();
                          case 8:
                            (a = e.sent), ue(a), (e.next = 14);
                            break;
                          case 12:
                            (e.prev = 12), (e.t0 = e.catch(0));
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 12]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })()();
          }, []),
            Object(l.useState)(
              function () {
                var e;
                (e = ie.filter(function (e) {
                  return e._id == a.hoteldetails;
                })),
                  z(e);
              },
              [ie]
            ),
            null != e.outlet.outlet &&
              Object(l.useEffect)(function () {
                !(function () {
                  var t = Object(p.a)(
                    d.a.mark(function t() {
                      return d.a.wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              C()(
                                "http://localhost:5002/groupList/".concat(
                                  e.outlet.outlet._id
                                )
                              ).then(function (e) {
                                fe(e.data);
                              });
                            case 1:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })()();
              }, []);
          Object(l.useEffect)(function () {
            e.outlet.outlet.outletImages.map(function (e) {
              var t = document.getElementById("previewImages"),
                a = new Image();
              (a.src = String("http://localhost:5002/images/".concat(e))),
                a.classList.add("".concat(me.a.previewImage)),
                t.appendChild(a);
            });
          }, []);
          Object(l.useEffect)(function () {
            e.outlet.outlet.groomingImages.map(function (e) {
              var t = document.getElementById("previewGrooming"),
                a = new Image();
              (a.src = String("http://localhost:5002/images/".concat(e))),
                a.classList.add("".concat(me.a.previewImage)),
                t.appendChild(a);
            });
          }, []);
          Object(l.useEffect)(function () {
            e.outlet.outlet.howToImages.map(function (e) {
              var t = document.getElementById("previewHowTo"),
                a = new Image();
              (a.src = String("http://localhost:5002/images/".concat(e))),
                a.classList.add("".concat(me.a.previewImage)),
                t.appendChild(a);
            });
          }, []);
          var be = (function () {
              var a = Object(p.a)(
                d.a.mark(function a(n) {
                  var l, r, c, m;
                  return d.a.wrap(function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            n.preventDefault(),
                            t.handleAppView("clients"),
                            t.handleContent(null),
                            (l = []),
                            A.map(function (e) {
                              l.push(e._id);
                            }),
                            (r = {
                              id: e.outlet.outlet._id,
                              title: B,
                              hotel: q,
                              address: le,
                              contact: Y,
                              jobRemarks: y,
                              payment: x,
                              userGroups: l,
                              youtubeLink: ee,
                            }),
                            (c = new FormData()),
                            Object.keys(o).map(function (e, t) {
                              c.append("outletImages", o[e]);
                            }),
                            Object.keys(E).map(function (e, t) {
                              c.append("groomingImages", E[e]);
                            }),
                            Object.keys(v).map(function (e, t) {
                              c.append("howToImages", v[e]);
                            }),
                            c.append("state", JSON.stringify(r)),
                            (a.next = 13),
                            fetch("http://localhost:5002/adminoutletList", {
                              method: "PATCH",
                              body: c,
                              headers: {
                                secret_token: localStorage.getItem("JWtToken"),
                              },
                            })
                          );
                        case 13:
                          return (m = a.sent), (a.next = 16), m;
                        case 16:
                          a.sent;
                        case 17:
                        case "end":
                          return a.stop();
                      }
                  }, a);
                })
              );
              return function (e) {
                return a.apply(this, arguments);
              };
            })(),
            he = (function () {
              var t = Object(p.a)(
                d.a.mark(function t() {
                  return d.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          C()(
                            "http://localhost:5002/groupList/".concat(
                              e.outlet.outlet._id
                            )
                          ).then(function (e) {
                            fe(e.data);
                          });
                        case 1:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function () {
                return t.apply(this, arguments);
              };
            })();
          Object(l.useEffect)(
            function () {
              var e = [];
              Ee.map(function (t) {
                a.userGroups.map(function (a) {
                  t._id == a && e.push(t);
                });
              }),
                L(e);
            },
            [Ee]
          );
          var ve = r.a.createElement(
            "div",
            { className: "eneral-margin" },
            r.a.createElement(
              "div",
              { className: "".concat(me.a.panel, " p-3 shadow") },
              r.a.createElement(
                "header",
                { className: me.a.header },
                r.a.createElement(
                  "div",
                  {
                    className: "row justify-content-between align-items-center",
                  },
                  " ",
                  r.a.createElement(
                    "div",
                    { className: "col-auto" },
                    r.a.createElement(
                      "h4",
                      { className: "d-inline" },
                      "Outlet User Groups"
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "col-auto" },
                    r.a.createElement(
                      "div",
                      null,
                      r.a.createElement(H, {
                        outlet: e.outlet,
                        fetchGroups: he,
                      })
                    )
                  )
                ),
                r.a.createElement("hr", null)
              ),
              r.a.createElement(
                "div",
                null,
                r.a.createElement(
                  "div",
                  {
                    className: "row justify-content-between align-items-center",
                  },
                  r.a.createElement(
                    "div",
                    { className: "col-auto" },
                    r.a.createElement("input", {
                      className: "form-control",
                      placeholder: "search",
                    })
                  )
                ),
                r.a.createElement("hr", null),
                r.a.createElement(ce, { groups: Ee, fetchGroups: he })
              )
            )
          );
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              "div",
              { className: "general-margin" },
              r.a.createElement(
                "form",
                { onSubmit: be },
                r.a.createElement(
                  "div",
                  { className: "".concat(me.a.panel, " p-3 shadow") },
                  r.a.createElement(
                    "header",
                    { className: me.a.header },
                    r.a.createElement(
                      "div",
                      {
                        className:
                          "row justify-content-between align-items-center",
                      },
                      " ",
                      r.a.createElement(
                        "div",
                        { className: "col-auto" },
                        r.a.createElement(
                          "h4",
                          { className: "d-inline my-3" },
                          "Outlet Details"
                        )
                      )
                    ),
                    r.a.createElement("hr", null)
                  ),
                  r.a.createElement(
                    "div",
                    null,
                    r.a.createElement(
                      "div",
                      { className: "form-row" },
                      r.a.createElement(
                        "div",
                        { className: "col" },
                        r.a.createElement(
                          "label",
                          { htmlFor: "ourletname" },
                          "Outlet Name"
                        ),
                        r.a.createElement("input", {
                          id: "outletname",
                          type: "text",
                          className: "form-control ",
                          placeholder: "Eg. Banquet..",
                          onChange: function (e) {
                            V(e.target.value);
                          },
                          required: !0,
                          value: B,
                        })
                      ),
                      r.a.createElement(
                        "div",
                        { className: "col" },
                        r.a.createElement(
                          "label",
                          { htmlFor: "hotelname" },
                          "Select Hotel"
                        ),
                        r.a.createElement(
                          "select",
                          {
                            name: "hotelDetails",
                            id: "hotelname",
                            className: "form-control",
                            onChange: function (e) {
                              U(e.target.value);
                            },
                            required: !0,
                          },
                          " ",
                          M.map(function (e) {
                            return r.a.createElement(
                              "option",
                              { selected: !0, key: e._id, value: e._id },
                              e.hotelName
                            );
                          })
                        )
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: me.a.next },
                      r.a.createElement(
                        "div",
                        { className: "form-row" },
                        r.a.createElement(
                          "div",
                          { className: "col" },
                          r.a.createElement("textarea", {
                            type: "text",
                            className: "form-control ",
                            placeholder: "Billing Address",
                            onChange: function (e) {
                              re(e.target.value);
                            },
                            value: le,
                            required: !0,
                          })
                        )
                      )
                    ),
                    r.a.createElement(
                      "div",
                      null,
                      r.a.createElement(
                        "div",
                        { className: me.a.next },
                        r.a.createElement(
                          "div",
                          { className: "form-row" },
                          r.a.createElement(
                            "div",
                            { className: "col" },
                            r.a.createElement("input", {
                              type: "text",
                              className: "form-control ",
                              placeholder: "Contact Number",
                              onChange: function (e) {
                                Q(e.target.value);
                              },
                              value: Y,
                            })
                          ),
                          r.a.createElement(
                            "div",
                            { className: "col" },
                            r.a.createElement("input", {
                              type: "text  ",
                              className: "form-control ",
                              placeholder: "Youtube Link ",
                              onChange: function (e) {
                                te(e.target.value);
                              },
                              value: ee,
                            })
                          )
                        )
                      ),
                      r.a.createElement(
                        "div",
                        { className: "form-row mt-3" },
                        r.a.createElement(
                          "div",
                          { className: "col" },
                          r.a.createElement(
                            "label",
                            { htmlFor: "ourletname" },
                            "Job Remarks"
                          ),
                          r.a.createElement("textarea", {
                            id: "outletname",
                            type: "text",
                            rows: 5,
                            className: "form-control ",
                            placeholder: "Eg. Banquet..",
                            onChange: function (e) {
                              j(e.target.value);
                            },
                            value: y,
                            required: !0,
                          })
                        )
                      ),
                      r.a.createElement(
                        "div",
                        { className: "form-row mt-3" },
                        r.a.createElement(
                          "div",
                          { className: "col" },
                          r.a.createElement(
                            "label",
                            { htmlFor: "ourletname" },
                            "Payment"
                          ),
                          r.a.createElement("textarea", {
                            id: "outletname",
                            type: "text",
                            rows: 5,
                            className: "form-control ",
                            placeholder: "Eg. Banquet..",
                            onChange: function (e) {
                              F(e.target.value);
                            },
                            value: x,
                            required: !0,
                          })
                        )
                      ),
                      r.a.createElement("div", { className: "mt-3" }),
                      r.a.createElement(
                        "div",
                        { className: "form-row mt-1 ".concat(me.a.next) },
                        r.a.createElement(
                          "div",
                          { className: "form-group col" },
                          r.a.createElement(
                            "label",
                            { htmlFor: "inputState" },
                            "Show Groups"
                          ),
                          r.a.createElement(O.a, {
                            className: ""
                              .concat(me.a.searchBox, " ")
                              .concat(me.a.optionContainer, " ")
                              .concat(me.a.option, " ")
                              .concat(me.a.multiselectContainer, " ")
                              .concat(me.a.ighlightOption),
                            options: Ee,
                            selectedValues: A,
                            onSelect: function (e) {
                              L(e);
                            },
                            onRemove: function (e) {
                              L(e);
                            },
                            displayValue: "groupTitle",
                          })
                        )
                      ),
                      r.a.createElement(
                        "div",
                        { className: "form-group ".concat(me.a.next) },
                        r.a.createElement(
                          "label",
                          { htmlFor: "exampleFormControlFile1" },
                          "Outlet Images"
                        ),
                        r.a.createElement("input", {
                          type: "file",
                          onChange: function (e) {
                            s(e.target.files);
                            var t = document.getElementById("previewImages");
                            Array.from(e.target.files).forEach(function (e) {
                              for (var a = new FileReader(); t.firstChild; )
                                t.removeChild(t.firstChild);
                              a.abort(),
                                (a.onload = function () {
                                  var e = new Image();
                                  (e.src = String(a.result)),
                                    e.classList.add(
                                      "".concat(me.a.previewImage)
                                    ),
                                    t.appendChild(e);
                                }),
                                a.readAsDataURL(e);
                            });
                          },
                          multiple: !0,
                          className: "form-control-file",
                          id: "exampleFormControlFile1",
                          accept: "image/png, image/jpeg ,image/jpg",
                        })
                      )
                    ),
                    r.a.createElement("div", { id: "previewImages" }),
                    r.a.createElement("hr", { className: "mt-5" }),
                    r.a.createElement(
                      "div",
                      null,
                      r.a.createElement(
                        "div",
                        null,
                        r.a.createElement(
                          "label",
                          { htmlFor: "exampleFormControlFile1" },
                          "Grooming"
                        ),
                        r.a.createElement("input", {
                          type: "file",
                          onChange: function (e) {
                            f(e.target.files);
                            var t = document.getElementById("previewGrooming");
                            Array.from(e.target.files).forEach(function (e) {
                              for (var a = new FileReader(); t.firstChild; )
                                t.removeChild(t.firstChild);
                              a.abort(),
                                (a.onload = function () {
                                  var e = new Image();
                                  (e.src = String(a.result)),
                                    e.classList.add(
                                      "".concat(me.a.previewImage)
                                    ),
                                    t.appendChild(e);
                                }),
                                a.readAsDataURL(e);
                            });
                          },
                          multiple: !0,
                          className: "form-control-file",
                          id: "exampleFormControlFile1",
                          accept: "image/png, image/jpeg ,image/jpg",
                        })
                      )
                    ),
                    r.a.createElement("div", { id: "previewGrooming" }),
                    r.a.createElement("hr", { className: "mt-5" }),
                    r.a.createElement(
                      "div",
                      null,
                      r.a.createElement(
                        "div",
                        null,
                        r.a.createElement(
                          "label",
                          { htmlFor: "exampleFormControlFile1" },
                          "How to report"
                        ),
                        r.a.createElement("input", {
                          type: "file",
                          onChange: function (e) {
                            g(e.target.files);
                            var t = document.getElementById("previewHowTo");
                            Array.from(e.target.files).forEach(function (e) {
                              for (var a = new FileReader(); t.firstChild; )
                                t.removeChild(t.firstChild);
                              a.abort(),
                                (a.onload = function () {
                                  var e = new Image();
                                  (e.src = String(a.result)),
                                    e.classList.add(
                                      "".concat(me.a.previewImage)
                                    ),
                                    t.appendChild(e);
                                }),
                                a.readAsDataURL(e);
                            });
                          },
                          multiple: !0,
                          className: "form-control-file",
                          id: "exampleFormControlFile1",
                          accept: "image/png, image/jpeg ,image/jpg",
                        })
                      )
                    ),
                    r.a.createElement("div", { id: "previewHowTo" }),
                    r.a.createElement("hr", { className: "mt-5" }),
                    null != e.outlet && ve,
                    r.a.createElement("hr", { className: "mt-5" }),
                    r.a.createElement(
                      "footer",
                      { className: " ".concat(me.a.footer, " ") },
                      r.a.createElement(
                        "div",
                        { className: "mx-auto" },
                        r.a.createElement(
                          "button",
                          {
                            type: "button",
                            onClick: function () {
                              t.handleAppView("clients"), t.handleContent(null);
                            },
                            className: "btn btn-secondary mx-1",
                          },
                          "Cancel"
                        ),
                        r.a.createElement(
                          "button",
                          { type: "submit", className: "btn btn-primary mx-1" },
                          "Submit"
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        },
        je = function () {
          var e = Object(l.useContext)(N),
            t = Object(l.useState)({}),
            a = Object(m.a)(t, 2),
            n = a[0],
            c = a[1],
            o = Object(l.useState)({}),
            s = Object(m.a)(o, 2),
            i = s[0],
            u = s[1],
            d = Object(l.useState)({}),
            p = Object(m.a)(d, 2),
            E = p[0],
            f = p[1],
            b = Object(ge.g)();
          Object(l.useEffect)(function () {
            e.handleAppView("users"), e.handleContent(null);
          }, []);
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              "nav",
              {
                className:
                  "navbar navbar-expand-lg navbar-dark bg-dark fixed-top",
              },
              r.a.createElement(
                "a",
                { className: "navbar-brand", href: "#" },
                "DeaksApp"
              ),
              r.a.createElement(
                "button",
                {
                  className: "navbar-toggler",
                  type: "button",
                  "data-toggle": "collapse",
                  "data-target": "#navbarNavAltMarkup",
                  "aria-controls": "navbarNavAltMarkup",
                  "aria-expanded": "false",
                  "aria-label": "Toggle navigation",
                },
                r.a.createElement("span", { className: "navbar-toggler-icon" })
              ),
              r.a.createElement(
                "div",
                {
                  className: "collapse navbar-collapse",
                  id: "navbarNavAltMarkup",
                },
                r.a.createElement(
                  "div",
                  { className: "navbar-nav ml-auto" },
                  r.a.createElement(
                    "a",
                    {
                      className: "nav-link",
                      href: "#",
                      onClick: function () {
                        e.handleAppView("notifications"), e.handleContent(null);
                      },
                    },
                    r.a.createElement(
                      "div",
                      { className: "d-flex ".concat(y.a.notofication) },
                      r.a.createElement(
                        "p",
                        { className: "m-0 p-0 " },
                        "Notifications"
                      ),
                      r.a.createElement(
                        "div",
                        {
                          className:
                            "d-flex justifiy-content-center align-items-center ",
                        },
                        r.a.createElement(
                          "p",
                          { className: "".concat(y.a.notificationNumber) },
                          "1"
                        )
                      )
                    )
                  ),
                  r.a.createElement(
                    "a",
                    {
                      className: "nav-link ml-3",
                      href: "#",
                      onClick: function () {
                        localStorage.removeItem("JWtToken"), b("/login");
                      },
                    },
                    "Logout"
                  )
                )
              )
            ),
            r.a.createElement(
              "nav",
              { className: "shadow ".concat(y.a.side_nav) },
              r.a.createElement(
                "ul",
                { className: y.a.nav_menu },
                r.a.createElement(
                  "li",
                  {
                    className: ""
                      .concat(y.a.nav_item, " nav-item ")
                      .concat(y.a.align_center, " px-0 "),
                  },
                  r.a.createElement(
                    "a",
                    {
                      href: "#",
                      defaultValue: "users",
                      onClick: function () {
                        e.handleAppView("users"), e.handleContent(null);
                      },
                    },
                    r.a.createElement(
                      "span",
                      { className: "menu-text " },
                      r.a.createElement("i", {
                        className: "fas fa-home fa-lg ",
                      }),
                      r.a.createElement(
                        "div",
                        null,
                        r.a.createElement("p", null, "Users")
                      )
                    )
                  )
                ),
                r.a.createElement(
                  "li",
                  {
                    className: ""
                      .concat(y.a.nav_item, " nav-item ")
                      .concat(y.a.align_center, " px-0"),
                  },
                  r.a.createElement(
                    "a",
                    {
                      href: " #",
                      onClick: function () {
                        e.handleAppView("clients"), e.handleContent(null);
                      },
                    },
                    " ",
                    r.a.createElement(
                      "span",
                      { className: y.a.menu_text },
                      r.a.createElement("i", {
                        className: "fas fa-bars fa-lg",
                      }),
                      r.a.createElement(
                        "div",
                        null,
                        r.a.createElement("p", null, "Clients")
                      )
                    )
                  )
                ),
                r.a.createElement(
                  "li",
                  {
                    className: ""
                      .concat(y.a.nav_item, " nav-item ")
                      .concat(y.a.align_center, " px-0"),
                  },
                  r.a.createElement(
                    "a",
                    {
                      href: "#",
                      onClick: function () {
                        e.handleAppView("slots"), e.handleContent(null);
                      },
                    },
                    r.a.createElement(
                      "span",
                      { className: y.a.menu_text },
                      r.a.createElement("i", {
                        className: "fas fa-sitemap fa-lg",
                      }),
                      r.a.createElement(
                        "div",
                        null,
                        r.a.createElement("p", null, "Slots")
                      )
                    )
                  )
                )
              )
            ),
            "slots" === e.viewState && r.a.createElement(w, null),
            "edit-slot" === e.viewState && r.a.createElement(T, null),
            "new-slot-form" === e.viewState && r.a.createElement(T, null),
            "clients" === e.viewState &&
              r.a.createElement(K, {
                editOutlet: function (e) {
                  u(e);
                },
                fetchGroups: function () {},
              }),
            "new-outlet-form" === e.viewState && r.a.createElement(de, null),
            "edit-outlet-form" === e.viewState &&
              r.a.createElement(ye, { outlet: i }),
            "users" === e.viewState &&
              r.a.createElement(le, {
                editUser: function (e) {
                  c(e);
                },
              }),
            "user-details" === e.viewState &&
              r.a.createElement(ue, { userId: n, formId: E }),
            "notifications" === e.viewState &&
              r.a.createElement(Ne, {
                verifyUser: function (e) {
                  f(e);
                },
              }),
            "verify-user-details" === e.viewState &&
              r.a.createElement(Se, { form: E })
          );
        };
      var Oe = function () {
        return (
          Object(l.useContext)(N),
          r.a.createElement(
            "div",
            null,
            r.a.createElement(
              v,
              null,
              " ",
              r.a.createElement(
                ge.d,
                null,
                r.a.createElement(ge.b, {
                  path: "/",
                  element: r.a.createElement(ge.a, {
                    replace: !0,
                    to: "/login",
                  }),
                }),
                r.a.createElement(ge.b, {
                  path: "/login",
                  element: r.a.createElement(we, null),
                }),
                r.a.createElement(ge.b, {
                  path: "/home",
                  element: r.a.createElement(je, null),
                })
              )
            )
          )
        );
      };
      new Map([
        [21, ["Monterey", "12"]],
        [20, ["Big Sur", "11"]],
        [19, ["Catalina", "10.15"]],
        [18, ["Mojave", "10.14"]],
        [17, ["High Sierra", "10.13"]],
        [16, ["Sierra", "10.12"]],
        [15, ["El Capitan", "10.11"]],
        [14, ["Yosemite", "10.10"]],
        [13, ["Mavericks", "10.9"]],
        [12, ["Mountain Lion", "10.8"]],
        [11, ["Lion", "10.7"]],
        [10, ["Snow Leopard", "10.6"]],
        [9, ["Leopard", "10.5"]],
        [8, ["Tiger", "10.4"]],
        [7, ["Panther", "10.3"]],
        [6, ["Jaguar", "10.2"]],
        [5, ["Puma", "10.1"]],
      ]);
      o.a.render(
        r.a.createElement(n.a, null, " ", r.a.createElement(Oe, null)),
        document.getElementById("root")
      );
    },
    48: function (e, t, a) {
      e.exports = { panel: "Slots_panel__2jzeW" };
    },
    49: function (e, t, a) {
      e.exports = { panel: "Notifications_panel__2SdaZ" };
    },
    51: function (e, t, a) {},
    6: function (e, t, a) {
      e.exports = {
        modal_lg: "NewOutletForm_modal_lg__Hb7r7",
        next: "NewOutletForm_next__2SfoA",
        panel: "NewOutletForm_panel__1VJjJ",
        previewVideo: "NewOutletForm_previewVideo__30O09",
        previewImage: "NewOutletForm_previewImage__2JqTX",
        footer: "NewOutletForm_footer__ouXQ_",
      };
    },
    8: function (e, t, a) {
      e.exports = {
        multiselectContainer: "NewGroupForm_multiselectContainer__1srQG",
        modal_lg: "NewGroupForm_modal_lg__3AWIa",
        next: "NewGroupForm_next__1_f-w",
        searchBox: "NewGroupForm_searchBox__cXXS4",
        inputField: "NewGroupForm_inputField__2Oq6b",
        optionContainer: "NewGroupForm_optionContainer__34I7n",
        option: "NewGroupForm_option__3qJ5N",
        highlightOption: "NewGroupForm_highlightOption__2iG5D",
        NGFDate: "NewGroupForm_NGFDate__1Y2QY",
        NGFTime: "NewGroupForm_NGFTime__3h9lQ",
      };
    },
    83: function (e, t, a) {
      e.exports = { card: "Console_card__z_aCz" };
    },
    84: function (e, t, a) {},
    85: function (e, t, a) {},
    86: function (e, t, a) {
      e.exports = a(413);
    },
    9: function (e, t, a) {
      e.exports = {
        panel: "NewSlotForm_panel__22iOw",
        formStyle: "NewSlotForm_formStyle__3pXHg",
        NSFDate: "NewSlotForm_NSFDate__m0r6j",
        pay: "NewSlotForm_pay__2IEDA",
        NSFTime: "NewSlotForm_NSFTime__1XrLL",
        footer: "NewSlotForm_footer__2v6Om",
        header: "NewSlotForm_header__2bszb",
        multiselectContainer: "NewSlotForm_multiselectContainer__1H-SG",
        searchBox: "NewSlotForm_searchBox__2OiXf",
        inputField: "NewSlotForm_inputField__I-imf",
        optionContainer: "NewSlotForm_optionContainer__31abl",
        option: "NewSlotForm_option__247tJ",
        highlightOption: "NewSlotForm_highlightOption__2exkj",
      };
    },
    99: function (e, t, a) {
      e.exports = { panel: "SlotStack_panel__3dcoH" };
    },
  },
  [[86, 2, 1]],
]);
//# sourceMappingURL=main.b6a3cb15.chunk.js.map
