(this["webpackJsonpppmtool-react-client"]=this["webpackJsonpppmtool-react-client"]||[]).push([[0],{50:function(e,t,a){},51:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a(1),c=a.n(s),n=a(25),i=a.n(n),o=(a(50),a(2)),l=a(3),d=a(6),j=a(5),u=(a(51),a(7)),p=function(){return Object(r.jsx)(c.a.Fragment,{children:Object(r.jsx)("div",{className:"CreateButton",children:Object(r.jsx)(u.b,{to:"/addBusiness",className:"btn btn-lg btn-dark",children:Object(r.jsx)("i",{className:"fas fa-plus-circle",children:" Create a Business"})})})})},h=a(4),b=a(9),m=a.n(b),O=a(17),v=a(14),f=a.n(v),x="GET_ERRORS",g="GET_PROJECTS",y="GET_PROJECT",N="DELETE_PROJECT",k="GET_BACKLOG",C="GET_PROJECT_TASK",S="DELETE_PROJECT_TASK",w="SET_CURRENT_USER",T=function(e,t){return function(){var a=Object(O.a)(m.a.mark((function a(r){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,f.a.post("/api/project",e);case 3:t.push("/dashboard"),r({type:x,payload:{}}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),r({type:x,payload:a.t0.response.data});case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()},D=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).onDeleteClick=function(t){e.props.deleteProject(t)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.project;return Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"card card-body bg-light mb-3",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-1",children:Object(r.jsx)("span",{className:"mx-auto",children:e.projectIdentifier})}),Object(r.jsxs)("div",{className:"col-lg-7 col-md-5 col-9",children:[Object(r.jsx)("div",{className:"text-center text-black",children:Object(r.jsx)("h3",{children:e.projectName})}),Object(r.jsx)("hr",{}),Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{className:"Description",children:"Description: "})," ",e.description]}),Object(r.jsx)("hr",{}),Object(r.jsxs)("div",{className:"Period",children:[e.start_date," ~ ",e.end_date]})]}),Object(r.jsx)("div",{className:"col-md-4 d-none d-lg-block",children:Object(r.jsxs)("ul",{className:"list-group",children:[Object(r.jsx)(u.b,{to:"myTasks/".concat(e.projectIdentifier),children:Object(r.jsx)("li",{className:"list-group-item board",children:Object(r.jsx)("i",{className:"fa fa-flag-checkered pr-1",children:" My Tasks "})})}),Object(r.jsx)(u.b,{to:"updateBusiness/".concat(e.projectIdentifier),children:Object(r.jsx)("li",{className:"list-group-item update",children:Object(r.jsx)("i",{className:"fa fa-edit pr-1",children:" Update Business Info"})})}),Object(r.jsx)("li",{className:"list-group-item delete",onClick:this.onDeleteClick.bind(this,e.projectIdentifier),children:Object(r.jsx)("i",{className:"fa fa-minus-circle pr-1",children:" Delete Business"})})]})})]})})})}}]),a}(s.Component),_=Object(h.b)(null,{deleteProject:function(e){return function(){var t=Object(O.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.confirm("Are you sure?")){t.next=4;break}return t.next=3,f.a.delete("/api/project/".concat(e));case 3:a({type:N,payload:e});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(D),I=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.getProjects()}},{key:"render",value:function(){var e=this.props.project.projects;return Object(r.jsx)("div",{className:"projects",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"col-md-12",children:[Object(r.jsx)("h1",{className:"display-4 text-center",children:"My Businesses"}),Object(r.jsx)("br",{}),Object(r.jsx)(p,{}),Object(r.jsx)("br",{}),Object(r.jsx)("hr",{}),e.map((function(e){return Object(r.jsx)(_,{project:e},e.id)}))]})})})})}}]),a}(s.Component),P=Object(h.b)((function(e){return{project:e.project}}),{getProjects:function(){return function(){var e=Object(O.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("/api/project/all");case 2:a=e.sent,t({type:g,payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(I),E=function(e){e?f.a.defaults.headers.common.Authorization=e:delete f.a.defaults.headers.common.Authorization},R=a(27),B=function(){return function(e){localStorage.removeItem("jwtToken"),E(!1),e({type:w,payload:{}})}},M=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"logout",value:function(){this.props.logout(),window.location.href="/"}},{key:"render",value:function(){var e,t=this.props.security,a=t.validToken,s=t.user,c=Object(r.jsx)("div",{className:"collapse navbar-collapse",id:"mobile-nav",children:Object(r.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(u.b,{className:"nav-link ",to:"/register",children:"Sign Up"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(u.b,{className:"nav-link",to:"/login",children:"LogIn"})})]})}),n=Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"mobile-nav",children:[Object(r.jsx)("ul",{className:"navbar-nav mr-auto",children:Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(u.b,{className:"nav-link",to:"/dashboard",children:"My Businesses"})})}),Object(r.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsxs)(u.b,{className:"nav-link ",to:"/dashboard",children:[Object(r.jsx)("i",{className:"fas fa-user-circle mr-1"})," ",s.fullName]})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(u.b,{className:"nav-link",to:"/logout",onClick:this.logout.bind(this),children:"Logout"})})]})]});return e=a&&s?n:c,Object(r.jsx)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark mb-4",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(u.b,{className:"navbar-brand",to:"/",children:"Personal Business Management"}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#mobile-nav",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),e]})})}}]),a}(s.Component),A=Object(h.b)((function(e){return{security:e.security}}),{logout:B})(M),U=(a(76),a(10)),G=a(15),L=a(12),q=a(13),H=a.n(q),W=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={projectName:"",projectIdentifier:"",description:"",start_date:"",end_date:"",errors:{}},e.onChange=e.onChange.bind(Object(L.a)(e)),e.onSubmit=e.onSubmit.bind(Object(L.a)(e)),e}return Object(l.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"onChange",value:function(e){this.setState(Object(G.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={projectName:this.state.projectName,projectIdentifier:this.state.projectIdentifier,description:this.state.description,start_date:this.state.start_date,end_date:this.state.end_date};this.props.createProject(t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"project",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(r.jsx)("h5",{className:"display-4 text-center",children:"Create Business"}),Object(r.jsx)("hr",{}),Object(r.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("input",{type:"text",className:H()("form-control form-control-lg",{"is-invalid":e.projectName}),placeholder:"Business Name",name:"projectName",value:this.state.projectName,onChange:this.onChange}),e.projectName&&Object(r.jsx)("div",{className:"invalid-feedback",children:e.projectName})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("input",{type:"text",className:H()("form-control form-control-lg",{"is-invalid":e.projectIdentifier}),placeholder:"Unique Business ID",name:"projectIdentifier",value:this.state.projectIdentifier,onChange:this.onChange}),e.projectIdentifier&&Object(r.jsx)("div",{className:"invalid-feedback",children:e.projectIdentifier})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("textarea",{className:H()("form-control form-control-lg",{"is-invalid":e.description}),placeholder:"Description",name:"description",value:this.state.description,onChange:this.onChange}),e.description&&Object(r.jsx)("div",{className:"invalid-feedback",children:e.description})]}),Object(r.jsx)("h6",{children:"Start Date"}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{type:"date",className:"form-control form-control-lg",name:"start_date",value:this.state.start_date,onChange:this.onChange})}),Object(r.jsx)("h6",{children:"Estimated End Date"}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{type:"date",className:"form-control form-control-lg",name:"end_date",value:this.state.end_date,onChange:this.onChange})}),Object(r.jsx)("input",{type:"submit",className:"btn btn-outline-dark btn-lg btn-block"})]})]})})})})})}}]),a}(s.Component),F=Object(h.b)((function(e){return{errors:e.errors}}),{createProject:T})(W),J=a(22),X=a(43),K={},V=a(11),z={projects:[],project:{}},Y={projectTasks:[],projectTask:{}},Q={validToken:!1,user:{}},Z=function(e){return!!e},$=Object(J.c)({errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return t.payload;default:return e}},project:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(V.a)(Object(V.a)({},e),{},{projects:t.payload});case y:return Object(V.a)(Object(V.a)({},e),{},{project:t.payload});case N:return Object(V.a)(Object(V.a)({},e),{},{projects:e.projects.filter((function(e){return e.projectIdentifier!==t.payload}))});default:return e}},backlog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(V.a)(Object(V.a)({},e),{},{projectTasks:t.payload});case C:return Object(V.a)(Object(V.a)({},e),{},{projectTask:t.payload});case S:return Object(V.a)(Object(V.a)({},e),{},{projectTasks:e.projectTasks.filter((function(e){return e.projectSequence!==t.payload}))});default:return e}},security:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(V.a)(Object(V.a)({},e),{},{validToken:Z(t.payload),user:t.payload});default:return e}}}),ee={},te=[X.a],ae=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),re=window.navigator.userAgent.includes("Chrome")&&ae?Object(J.e)($,ee,Object(J.d)(J.a.apply(void 0,te),ae)):Object(J.e)($,ee,Object(J.d)(J.a.apply(void 0,te))),se=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={id:"",projectName:"",projectIdentifier:"",description:"",start_date:"",end_date:"",errors:{}},e.onChange=e.onChange.bind(Object(L.a)(e)),e.onSubmit=e.onSubmit.bind(Object(L.a)(e)),e}return Object(l.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors});var t=e.project,a=t.id,r=t.projectName,s=t.projectIdentifier,c=t.description,n=t.start_date,i=t.end_date;this.setState({id:a,projectName:r,projectIdentifier:s,description:c,start_date:n,end_date:i})}},{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getProject(e,this.props.history)}},{key:"onChange",value:function(e){this.setState(Object(G.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={id:this.state.id,projectName:this.state.projectName,projectIdentifier:this.state.projectIdentifier,description:this.state.description,start_date:this.state.start_date,end_date:this.state.end_date};this.props.createProject(t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return Object(r.jsx)("div",{className:"project",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(r.jsx)("h5",{className:"display-4 text-center",children:"Edit Business"}),Object(r.jsx)("hr",{}),Object(r.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("input",{type:"text",className:H()("form-control form-control-lg",{"is-invalid":e.projectName}),placeholder:"Business Name",name:"projectName",value:this.state.projectName,onChange:this.onChange}),e.projectName&&Object(r.jsx)("div",{className:"invalid-feedback",children:e.projectName})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("input",{type:"text",className:H()("form-control form-control-lg",{"is-invalid":e.projectIdentifier}),placeholder:"Unique Business ID",name:"projectIdentifier",value:this.state.projectIdentifier,disabled:!0}),e.projectIdentifier&&Object(r.jsx)("div",{className:"invalid-feedback",children:e.projectIdentifier})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("textarea",{className:H()("form-control form-control-lg",{"is-invalid":e.description}),placeholder:"Description",name:"description",value:this.state.description,onChange:this.onChange}),e.description&&Object(r.jsx)("div",{className:"invalid-feedback",children:e.description})]}),Object(r.jsx)("h6",{children:"Start Date"}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{type:"date",className:"form-control form-control-lg",name:"start_date",value:this.state.start_date,onChange:this.onChange})}),Object(r.jsx)("h6",{children:"Estimated End Date"}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{type:"date",className:"form-control form-control-lg",name:"end_date",value:this.state.end_date,onChange:this.onChange})}),Object(r.jsx)("input",{type:"submit",className:"btn btn-outline-dark btn-lg btn-block"})]})]})})})})}}]),a}(s.Component),ce=Object(h.b)((function(e){return{project:e.project.project,errors:e.errors}}),{getProject:function(e,t){return function(){var a=Object(O.a)(m.a.mark((function a(r){var s;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,f.a.get("/api/project/".concat(e));case 3:s=a.sent,r({type:y,payload:s.data}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),t.push("/dashboard");case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()},createProject:T})(se),ne=a(23),ie=a.n(ne),oe=function(e){return function(){var t=Object(O.a)(m.a.mark((function t(a){var r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.a.get("/api/backlog/".concat(e));case 3:r=t.sent,a({type:k,payload:r.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:x,payload:t.t0.response.data});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},le=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"onDeleteClick",value:function(e,t){this.props.deleteProjectTask(e,t)}},{key:"render",value:function(){var e,t,a=this.props.projectTask;return 1===a.priority?(e="HIGH",t="TO_DO"===a.status?"HIGHpriority1":"IN_PROGRESS"===a.status?"HIGHpriority2":"HIGHpriority3"):2===a.priority?(e="MEDIUM",t="TO_DO"===a.status?"MEDIUMpriority1":"IN_PROGRESS"===a.status?"MEDIUMpriority2":"MEDIUMpriority3"):(e="LOW",t="TO_DO"===a.status?"LOWpriority1":"IN_PROGRESS"===a.status?"LOWpriority2":"LOWpriority3"),Object(r.jsxs)("div",{className:"card mb-1 bg-light",children:[Object(r.jsxs)("div",{className:"card-header text-primary text-light",id:"".concat(t),children:[e," Priority"]}),Object(r.jsxs)("div",{className:"card-body bg-light",children:[Object(r.jsxs)("h5",{className:"card-title",children:["Summary of ",a.projectSequence]}),Object(r.jsx)("p",{className:"card-text text-truncate ",children:a.summary}),Object(r.jsx)("hr",{}),Object(r.jsxs)("h6",{className:"text-right DueDate",children:["Due Date: ",a.dueDate]}),Object(r.jsx)(u.b,{to:"/updateTask/".concat(a.projectIdentifier,"/").concat(a.projectSequence),className:"btn btn-primary",children:"View / Update"}),Object(r.jsx)("button",{className:"btn btn-danger ml-4",onClick:this.onDeleteClick.bind(this,a.projectIdentifier,a.projectSequence),children:"Delete"})]})]})}}]),a}(s.Component),de=Object(h.b)(null,{deleteProjectTask:function(e,t){return function(){var a=Object(O.a)(m.a.mark((function a(r){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!window.confirm("Are you sure?")){a.next=4;break}return a.next=3,f.a.delete("/api/backlog/".concat(e,"/").concat(t));case 3:r({type:S,payload:t});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})(le),je=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){for(var e=this.props.projectTasks_prop.map((function(e){return Object(r.jsx)(de,{projectTask:e},e.id)})),t=[],a=[],s=[],c=0;c<e.length;c++)"TO_DO"===e[c].props.projectTask.status?t.push(e[c]):"IN_PROGRESS"===e[c].props.projectTask.status?a.push(e[c]):s.push(e[c]);return Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"col-md-4",children:[Object(r.jsx)("div",{className:"card text-center mb-2",children:Object(r.jsx)("div",{className:"card-header text-dark",id:"todocardheader",children:Object(r.jsx)("h3",{children:"TO DO"})})}),t]}),Object(r.jsxs)("div",{className:"col-md-4",children:[Object(r.jsx)("div",{className:"card text-center mb-2",children:Object(r.jsx)("div",{className:"card-header text-dark",id:"inprogresscardheader",children:Object(r.jsx)("h3",{children:"IN PROGRESS"})})}),a]}),Object(r.jsxs)("div",{className:"col-md-4",children:[Object(r.jsx)("div",{className:"card text-center mb-2",children:Object(r.jsx)("div",{className:"card-header text-dark",id:"donecardheader",children:Object(r.jsx)("h3",{children:"DONE"})})}),s]})]})})}}]),a}(s.Component),ue=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={errors:{}},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getBacklog(e)}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e,t,a=this.props.match.params.id,s=this.props.backlog.projectTasks,c=this.props.errors;t=Object(r.jsxs)("div",{children:[Object(r.jsxs)("h1",{className:"text-center",children:["My Tasks of Business ",a]}),Object(r.jsx)("div",{className:"CreateButton",children:Object(r.jsx)(u.b,{to:"/addTask/".concat(a),className:"btn btn-lg btn-primary",children:Object(r.jsxs)("i",{className:"fas fa-plus-circle",children:[" Create Task for ",a]})})}),Object(r.jsx)("br",{}),Object(r.jsx)("hr",{})]});return e=function(e,a){return e.businessNotFound?Object(r.jsx)("h1",{className:"bg-danger text-light text-center",children:e.businessNotFound}):e.identifier?Object(r.jsx)("h1",{className:"bg-danger text-light text-center",children:e.identifier}):0===a.length?Object(r.jsxs)("div",{children:[t,Object(r.jsx)("h1",{className:"bg-info text-light text-center",children:"No Tasks on this board Yet"})]}):Object(r.jsxs)("div",{children:[t,Object(r.jsx)(je,{projectTasks_prop:a})]})}(c,s),Object(r.jsx)("div",{className:"container",children:e})}}]),a}(s.Component);oe.propTypes={backlog:ie.a.object.isRequired,errors:ie.a.object.isRequired,getBacklog:ie.a.func.isRequired};var pe=Object(h.b)((function(e){return{backlog:e.backlog,errors:e.errors}}),{getBacklog:oe})(ue),he=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var r;Object(o.a)(this,a);var s=(r=t.call(this,e)).props.match.params.id;return r.state={summary:"",acceptanceCriteria:"",status:"",priority:0,dueDate:"",projectIdentifier:s,errors:{}},r.onChange=r.onChange.bind(Object(L.a)(r)),r.onSubmit=r.onSubmit.bind(Object(L.a)(r)),r}return Object(l.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"onChange",value:function(e){this.setState(Object(G.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={summary:this.state.summary,acceptanceCriteria:this.state.acceptanceCriteria,status:this.state.status,priority:this.state.priority,dueDate:this.state.dueDate};this.props.addProjectTask(this.state.projectIdentifier,t,this.props.history)}},{key:"render",value:function(){var e=this.props.match.params.id,t=this.state.errors;return Object(r.jsx)("div",{className:"add-PBI",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(r.jsx)(u.b,{to:"/projectBoard/".concat(e),className:"btn btn-primary",children:"Back to My Tasks"}),Object(r.jsx)("h4",{className:"display-4 text-center",children:"Add Task"}),Object(r.jsx)("p",{className:"lead text-center",children:"Project Name + Project Code"}),Object(r.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("input",{type:"text",className:H()("form-control form-control-lg",{"is-invalid":t.summary}),name:"summary",placeholder:"Task summary",value:this.state.summary,onChange:this.onChange}),t.summary&&Object(r.jsx)("div",{className:"invalid-feedback",children:t.summary})]}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("textarea",{className:"form-control form-control-lg",placeholder:"Acceptance Criteria",name:"acceptanceCriteria",value:this.state.acceptanceCriteria,onChange:this.onChange})}),Object(r.jsx)("h6",{children:"Due Date"}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{type:"date",className:"form-control form-control-lg",name:"dueDate",value:this.state.dueDate,onChange:this.onChange})}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsxs)("select",{className:"form-control form-control-lg",name:"priority",value:this.state.priority,onChange:this.onChange,children:[Object(r.jsx)("option",{value:0,children:"Select Priority"}),Object(r.jsx)("option",{value:1,children:"High"}),Object(r.jsx)("option",{value:2,children:"Medium"}),Object(r.jsx)("option",{value:3,children:"Low"})]})}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsxs)("select",{className:"form-control form-control-lg",name:"status",value:this.state.status,onChange:this.onChange,children:[Object(r.jsx)("option",{value:"",children:"Select Status"}),Object(r.jsx)("option",{value:"TO_DO",children:"TO DO"}),Object(r.jsx)("option",{value:"IN_PROGRESS",children:"IN PROGRESS"}),Object(r.jsx)("option",{value:"DONE",children:"DONE"})]})}),Object(r.jsx)("input",{type:"submit",className:"btn btn-primary btn-block mt-4"})]})]})})})})}}]),a}(s.Component),be=Object(h.b)((function(e){return{errors:e.errors}}),{addProjectTask:function(e,t,a){return function(){var r=Object(O.a)(m.a.mark((function r(s){return m.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,f.a.post("/api/backlog/".concat(e),t);case 3:a.push("/myTasks/".concat(e)),s({type:x,payload:{}}),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),s({type:x,payload:r.t0.response.data});case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()}})(he),me=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={id:"",projectSequence:"",summary:"",acceptanceCriteria:"",status:"",priority:"",dueDate:"",projectIdentifier:"",creat_At:"",errors:{}},e.onChange=e.onChange.bind(Object(L.a)(e)),e.onSubmit=e.onSubmit.bind(Object(L.a)(e)),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params,t=e.backlog_id,a=e.pt_id;this.props.getProjectTask(t,a,this.props.history)}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors});var t=e.projectTask,a=t.id,r=t.projectSequence,s=t.summary,c=t.acceptanceCriteria,n=t.status,i=t.priority,o=t.dueDate,l=t.projectIdentifier,d=t.creat_At;this.setState({id:a,projectSequence:r,summary:s,acceptanceCriteria:c,status:n,priority:i,dueDate:o,projectIdentifier:l,creat_At:d})}},{key:"onChange",value:function(e){this.setState(Object(G.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={id:this.state.id,projectSequence:this.state.projectSequence,summary:this.state.summary,acceptanceCriteria:this.state.acceptanceCriteria,status:this.state.status,priority:this.state.priority,dueDate:this.state.dueDate,projectIdentifier:this.state.projectIdentifier,creat_At:this.state.creat_At};this.props.updateProjectTask(this.state.projectIdentifier,this.state.projectSequence,t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return Object(r.jsx)("div",{className:"add-PBI",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(r.jsx)(u.b,{to:"/myTasks/".concat(this.state.projectIdentifier),className:"btn btn-primary",children:"Back to My Tasks"}),Object(r.jsx)("h4",{className:"display-4 text-center",children:"Update Task"}),Object(r.jsx)("p",{className:"lead text-center",children:this.state.projectSequence}),Object(r.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("input",{type:"text",className:H()("form-control form-control-lg",{"is-invalid":e.summary}),name:"summary",placeholder:"Task summary",value:this.state.summary,onChange:this.onChange}),e.summary&&Object(r.jsx)("div",{className:"invalid-feedback",children:e.summary})]}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("textarea",{className:"form-control form-control-lg",placeholder:"Acceptance Criteria",name:"acceptanceCriteria",value:this.state.acceptanceCriteria,onChange:this.onChange})}),Object(r.jsx)("h6",{children:"Due Date"}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{type:"date",className:"form-control form-control-lg",name:"dueDate",value:this.state.dueDate,onChange:this.onChange})}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsxs)("select",{className:"form-control form-control-lg",name:"priority",value:this.state.priority,onChange:this.onChange,children:[Object(r.jsx)("option",{value:0,children:"Select Priority"}),Object(r.jsx)("option",{value:1,children:"High"}),Object(r.jsx)("option",{value:2,children:"Medium"}),Object(r.jsx)("option",{value:3,children:"Low"})]})}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsxs)("select",{className:"form-control form-control-lg",name:"status",value:this.state.status,onChange:this.onChange,children:[Object(r.jsx)("option",{value:"",children:"Select Status"}),Object(r.jsx)("option",{value:"TO_DO",children:"TO DO"}),Object(r.jsx)("option",{value:"IN_PROGRESS",children:"IN PROGRESS"}),Object(r.jsx)("option",{value:"DONE",children:"DONE"})]})}),Object(r.jsx)("input",{type:"submit",className:"btn btn-primary btn-block mt-4"})]})]})})})})}}]),a}(s.Component),Oe=Object(h.b)((function(e){return{projectTask:e.backlog.projectTask,errors:e.errors}}),{getProjectTask:function(e,t,a){return function(){var r=Object(O.a)(m.a.mark((function r(s){var c;return m.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,f.a.get("/api/backlog/".concat(e,"/").concat(t));case 3:c=r.sent,s({type:C,payload:c.data}),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),a.push("/myTasks/".concat(e));case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()},updateProjectTask:function(e,t,a,r){return function(){var s=Object(O.a)(m.a.mark((function s(c){return m.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,f.a.patch("/api/backlog/".concat(e,"/").concat(t),a);case 3:r.push("/myTasks/".concat(e)),c({type:x,payload:{}}),s.next=10;break;case 7:s.prev=7,s.t0=s.catch(0),c({type:x,payload:s.t0.response.data});case 10:case"end":return s.stop()}}),s,null,[[0,7]])})));return function(e){return s.apply(this,arguments)}}()}})(me),ve=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"render",value:function(){return Object(r.jsx)("div",{className:"landing",children:Object(r.jsx)("div",{className:"light-overlay landing-inner text-dark",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"col-7 text-center",children:[Object(r.jsx)("h1",{className:"BigHead1",children:"Business"}),Object(r.jsx)("h1",{className:"BigHead2",children:"Management"}),Object(r.jsx)("h1",{className:"BigHead3",children:"System"})]}),Object(r.jsxs)("div",{className:"col-4 text-center",children:[Object(r.jsx)("div",{className:"LoginButton",children:Object(r.jsx)(u.b,{to:"/login",className:"btn btn-dark btn-lg btn-block",children:"Log in"})}),Object(r.jsx)("div",{className:"SigninButton",children:Object(r.jsx)(u.b,{to:"/register",className:"btn btn-dark btn-lg btn-block",children:"Sign Up"})})]})]})})})})}}]),a}(s.Component),fe=Object(h.b)((function(e){return{security:e.security}}))(ve),xe=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={username:"",fullName:"",password:"",confirmPassword:"",errors:{}},e.onChange=e.onChange.bind(Object(L.a)(e)),e.onSubmit=e.onSubmit.bind(Object(L.a)(e)),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"onChange",value:function(e){this.setState(Object(G.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,fullName:this.state.fullName,password:this.state.password,confirmPassword:this.state.confirmPassword};this.props.createNewUser(t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return Object(r.jsx)("div",{className:"register",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(r.jsx)("h1",{className:"display-4 text-center",children:"Sign Up"}),Object(r.jsx)("p",{className:"lead text-center",children:"Create your Account"}),Object(r.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("input",{type:"text",className:H()("form-control form-control-lg",{"is-invalid":e.fullName}),placeholder:"Full Name",name:"fullName",value:this.state.fullName,onChange:this.onChange}),e.fullName&&Object(r.jsx)("div",{className:"invalid-feedback",children:e.fullName})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("input",{type:"text",className:H()("form-control form-control-lg",{"is-invalid":e.username}),placeholder:"Email Address (Username)",name:"username",value:this.state.username,onChange:this.onChange}),e.username&&Object(r.jsx)("div",{className:"invalid-feedback",children:e.username})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("input",{type:"password",className:H()("form-control form-control-lg",{"is-invalid":e.password}),placeholder:"Password",name:"password",value:this.state.password,onChange:this.onChange}),e.password&&Object(r.jsx)("div",{className:"invalid-feedback",children:e.password})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("input",{type:"password",className:H()("form-control form-control-lg",{"is-invalid":e.confirmPassword}),placeholder:"Confirm Password",name:"confirmPassword",value:this.state.confirmPassword,onChange:this.onChange}),e.confirmPassword&&Object(r.jsx)("div",{className:"invalid-feedback",children:e.confirmPassword})]}),Object(r.jsx)("input",{type:"submit",className:"btn btn-outline-dark btn-block mt-4"})]})]})})})})}}]),a}(s.Component),ge=Object(h.b)((function(e){return{errors:e.errors,security:e.security}}),{createNewUser:function(e,t){return function(){var a=Object(O.a)(m.a.mark((function a(r){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,f.a.post("/api/users/register",e);case 3:t.push("/login"),r({type:x,payload:{}}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),r({type:x,payload:a.t0.response.data});case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()}})(xe),ye=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={username:"",password:"",errors:{}},e.onChange=e.onChange.bind(Object(L.a)(e)),e.onSubmit=e.onSubmit.bind(Object(L.a)(e)),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.security.validToken&&this.props.history.push("/dashboard"),e.errors&&this.setState({errors:e.errors})}},{key:"onChange",value:function(e){this.setState(Object(G.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,password:this.state.password};this.props.login(t)}},{key:"render",value:function(){var e=this.state.errors;return Object(r.jsx)("div",{className:"login",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(r.jsx)("h1",{className:"display-4 text-center",children:"Log In"}),Object(r.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("input",{type:"text",className:H()("form-control form-control-lg",{"is-invalid":e.username}),placeholder:"Email Address",name:"username",value:this.state.username,onChange:this.onChange}),e.username&&Object(r.jsx)("div",{className:"invalid-feedback",children:e.username})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("input",{type:"password",className:H()("form-control form-control-lg",{"is-invalid":e.password}),placeholder:"Password",name:"password",value:this.state.password,onChange:this.onChange}),e.password&&Object(r.jsx)("div",{className:"invalid-feedback",children:e.password})]}),Object(r.jsx)("input",{type:"submit",className:"btn btn-outline-dark btn-block mt-4"}),Object(r.jsx)("hr",{}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)(u.b,{to:"/register",className:"btn btn-outline-dark btn-block mt-4",children:"Don't have an account yet? Sign Up!"})})]})]})})})})}}]),a}(s.Component),Ne=Object(h.b)((function(e){return{security:e.security,errors:e.errors}}),{login:function(e){return function(){var t=Object(O.a)(m.a.mark((function t(a){var r,s,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.a.post("/api/users/login",e);case 3:r=t.sent,s=r.data.token,localStorage.setItem("jwtToken",s),E(s),c=Object(R.a)(s),a({type:w,payload:c}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:x,payload:t.t0.response.data});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})(ye),ke=a(44),Ce=Object(h.b)((function(e){return{security:e.security}}))((function(e){var t=e.component,a=e.security,s=Object(ke.a)(e,["component","security"]);return Object(r.jsx)(U.b,Object(V.a)(Object(V.a)({},s),{},{render:function(e){return!0===a.validToken?Object(r.jsx)(t,Object(V.a)({},e)):Object(r.jsx)(U.a,{to:"/login"})}}))})),Se=localStorage.jwtToken;if(Se){E(Se);var we=Object(R.a)(Se);re.dispatch({type:w,payload:we});var Te=Date.now()/1e3;we.exp<Te&&(re.dispatch(B()),window.location.href="/")}var De=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(r.jsx)(h.a,{store:re,children:Object(r.jsx)(u.a,{children:Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(A,{}),Object(r.jsx)(U.b,{exact:!0,path:"/",component:fe}),Object(r.jsx)(U.b,{exact:!0,path:"/register",component:ge}),Object(r.jsx)(U.b,{exact:!0,path:"/login",component:Ne}),Object(r.jsxs)(U.d,{children:[Object(r.jsx)(Ce,{exact:!0,path:"/dashboard",component:P}),Object(r.jsx)(Ce,{exact:!0,path:"/addBusiness",component:F}),Object(r.jsx)(Ce,{exact:!0,path:"/updateBusiness/:id",component:ce}),Object(r.jsx)(Ce,{exact:!0,path:"/myTasks/:id",component:pe}),Object(r.jsx)(Ce,{exact:!0,path:"/addTask/:id",component:be}),Object(r.jsx)(Ce,{exact:!0,path:"/updateTask/:backlog_id/:pt_id",component:Oe})]})]})})})}}]),a}(s.Component),_e=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,78)).then((function(t){var a=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,n=t.getTTFB;a(e),r(e),s(e),c(e),n(e)}))};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(De,{})}),document.getElementById("root")),_e()}},[[77,1,2]]]);
//# sourceMappingURL=main.0fc702f6.chunk.js.map