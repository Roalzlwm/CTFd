import{$ as e,u as s}from"./main.4b11e5ee.js";function r(t){t.preventDefault(),s({title:"Reset CTF?",body:"Are you sure you want to reset your CTFd instance?",success:function(){e("#reset-ctf-form").off("submit").submit()}})}e(()=>{e("#reset-ctf-form").submit(r)});
