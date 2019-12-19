# a11y 

https://reactjs.org/docs/accessibility.html


## intro

some stuff from https://webaim.org/projects/million/

we're building public facing stuff -> more important

lawsuits...dominos...no in UK unless or are a public body...but even so its just nice to do it...we want people to use our sights (lol pun)

we do it a bit but not enough and what we do is inconsistent 

- it's invisible to us (obvious if css is broken, not obvious if a11y issues)
- we don't bake a11y into our AC/user stories
- there's a lot to consider and learn 

so...
- how we can we see the impacts
- share some learning and incrementally improve how we do this

## 4 principles

- Perceivable 
- Operable
- Understandable (content and operation)
- Robust (can be interpreted by a wide variety of user agenst, incl assistive tech)

https://www.w3.org/TR/WCAG21/


## tools

- lint a11y (but styled components...)
- axe
- lighthouse
- nvda
- dev tools accessibility inspector

checking focus
document.body.addEventListener('focusin', (event) => {
    console.log(document.activeElement)
})

link from Pete https://www.telerik.com/blogs/the-need-for-automated-accessibility-testing can integrate axe with jest...

tools not a panacea - don't pick up everything

## what - key areas, basic rules, with examples

Focus management is crucial : if you do outline: 0 you really should add another :focus style, this is about the easiest win there is
Keyboard nav
Semantic html
Zoom
Contrast
Motion

https://www.w3.org/TR/using-aria/

https://www.w3.org/TR/wai-aria-practices-1.1/



## so what can we take away and start doing?

- start using some sort of tool as part of your development work
- look for potential issues on code reviews