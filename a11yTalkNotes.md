# a11y 

## intro

### who

>The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect.
– Tim Berners-Lee https://www.w3.org/standards/webdesign/accessibility

https://www.w3.org/WAI/fundamentals/accessibility-intro/:
> Web accessibility encompasses all disabilities that affect access to the Web, including:

>auditory
cognitive
neurological
physical
speech
visual

>Web accessibility also benefits people without disabilities, for example:

>people using mobile phones, smart watches, smart TVs, and other devices with small screens, different input modes, etc.
older people with changing abilities due to ageing
people with “temporary disabilities” such as a broken arm or lost glasses
people with “situational limitations” such as in bright sunlight or in an environment where they cannot listen to audio
people using a slow Internet connection, or who have limited or expensive bandwidth


### why

we're building public facing stuff -> more important

lawsuits...dominos...no in UK unless or are a public body...but even so its just nice to do it...we want people to use our sights (lol pun)

### what's stopping us?

we do it a bit but not enough and what we do is inconsistent 

- it's invisible to us (obvious if css is broken, not obvious if a11y issues)
- we don't bake a11y into our AC/user stories
- there's a lot to consider and learn 

so...
- how we can we see the impacts
- share some learning and incrementally improve how we do this

## 4 principles

- Perceivable - not just visually!
- Operable - not just using a mouse!
- Understandable (content and operation)
- Robust (can be interpreted by a wide variety of user agenst, incl assistive tech)

https://www.w3.org/TR/WCAG21/


## tools

- lint a11y (but styled components...)
- axe
- lighthouse
- nvda (or the mac built in one)
- dev tools accessibility inspector

- pally? does this have same issue as lint a11y

checking focus
document.body.addEventListener('focusin', (event) => {
    console.log(document.activeElement)
})

link from Pete https://www.telerik.com/blogs/the-need-for-automated-accessibility-testing can integrate axe with jest...

tools not a panacea - don't pick up everything

## what - key areas, basic rules, with examples

https://reactjs.org/docs/accessibility.html - get some reacty stuff in

- Zoom: responsive design can help with this, try zoom see what happens (200%)

- Contrast: OK this is more design :-)

- Focus management is crucial : if you do outline: 0 you really should add another :focus style, this is about the easiest win there is

- Keyboard nav: there are patterns and they are set out in https://www.w3.org/TR/wai-aria-practices-1.1/

- Semantic html...only if can't, use aria
    - https://www.w3.org/TR/using-aria/
    - https://www.w3.org/TR/wai-aria-practices-1.1/  : No aria better than bad aria - eg the broken promise of role="button"... webAIM million: sites with aria more likely to have accessibility issues!!

- structure/landmarks...can I do an nvda demo? does it have captions?

- Motion


## so what can we take away and start doing?
Its within our gift to start...
- start using some sort of tool as part of your development work
- keyboard nav, zoom
- building a component? look at the authoring practices
- look for potential issues on code reviews

Some stuff is more structural - AC/Requirements/Checklists/look at tools we can build into CI process

Ideally - user testing/expert audit