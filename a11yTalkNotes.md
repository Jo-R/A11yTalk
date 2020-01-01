# a11y

## intro

### who

> The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect.
> – Tim Berners-Lee https://www.w3.org/standards/webdesign/accessibility

https://www.w3.org/WAI/fundamentals/accessibility-intro/:

> Web accessibility encompasses all disabilities that affect access to the Web, including:

> auditory
> cognitive
> neurological
> physical
> speech
> visual

> Web accessibility also benefits people without disabilities, for example:

> people using mobile phones, smart watches, smart TVs, and other devices with small screens, different input modes, etc.
> older people with changing abilities due to ageing
> people with “temporary disabilities” such as a broken arm or lost glasses
> people with “situational limitations” such as in bright sunlight or in an environment where they cannot listen to audio
> people using a slow Internet connection, or who have limited or expensive bandwidth

but its all about ease of use so actually helps everyone

### why

we're building public facing stuff -> more important

1 in 5 people in UK

lawsuits...dominos...no in UK unless or are a public body...but even so its just nice to do it...we want people to use our sights (lol pun) and there is an intersection with seo so...

### what's stopping us?

we do it a bit but not enough and what we do is inconsistent

- it's invisible to us (obvious if css is broken, not obvious if a11y issues)
- we don't bake a11y into our AC/user stories/culture
- there's a lot to consider and learn - overwhelming - different groups, different needs, standards are lengthy and dull etc

we're not alone - 61% of 1400 devs who answered a survey run by one of the devs on the Edge team do no accessibility testing https://www.gwhitworth.com/blog/2019/07/form-controls-components/

so...

- how we can we see the impacts
- share some learning and incrementally improve how we, as a team, do this

## 4 principles

wcag - web content accessibility guidelines

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
- dev tools accessibility inspector/tree

- pally? does this have same issue as lint a11y

checking focus
document.body.addEventListener('focusin', (event) => {
console.log(document.activeElement)
})

link from Pete https://www.telerik.com/blogs/the-need-for-automated-accessibility-testing can integrate axe with jest...

tools not a panacea - don't pick up everything - eg can automate some stuff but no current way of automating screen reader tests

## what - key areas, basic rules, with examples

https://reactjs.org/docs/accessibility.html - get some reacty stuff in
https://developer.mozilla.org/en-US/docs/Web/Accessibility and review this

Look at downshift.js and reach UI stuff

this is good: https://www.24a11y.com/2019/what-a-year-of-learning-and-teaching-accessibility-taught-me/

- Contrast: OK this is more design, and for some customers will be out of our controle to some extent :-) a11y for designers image https://webaim.org/resources/designers/ - obviously a lot of accessibility is rooted in the design of the page so we need to work hand in hand, even though I'm obviously gonna focus more on the dev side

- Zoom: responsive design can help with this, try zoom see what happens (200%)...meta tags...

- Focus management for interactive elements is crucial: if you use the correct focusable elements the order just happens, tabIndex = 0 if not to insert them into the tab flow

  - ...if you do outline: 0 you really should add another :focus style, this is about the easiest win there is...and if you have a div that wraps an input for formatting purposes (e.g. password input) use :focus-within

  - ...watch out for modals and things like focus getting trapped behind them, elements that are in collapsible divs (show how hide these)

  - On routing - make sure focus is cool and new stuff gets announced - skip link? since might want to skip back to place in the nav that thy came form (can use anchor/ids cf macy sutton example)

  - brief example of using refs to manage focus but use sparingly

use this as example for the next 2 https://24ways.org/2019/making-a-better-custom-select-element/ (is cloned and in this repo)
this survey https://www.gwhitworth.com/blog/2019/07/form-controls-components/ shows the select element is a particular point of pain with 42% of web devs saying they've needed to recreate it themelevs due to the limitations of the inbuilt one

- Keyboard nav: there are patterns and they are set out in https://www.w3.org/TR/wai-aria-practices-1.1/ - show how this example mapps to this

- Semantic html...only if can't, use aria
  - https://www.w3.org/TR/using-aria/
  - https://www.w3.org/TR/wai-aria-practices-1.1/ : No aria better than bad aria - eg the broken promise of role="button"... webAIM million: sites with aria more likely to have accessibility issues!!
  - can i innclude aria live regions/announcements for AT users? eg say its submitting

The an nvda demo for this bit (captions in windows settings might work best):

- structure/landmarks...https://www.w3.org/TR/wai-aria-practices/examples/landmarks/index.html or https://webaim.org/techniques/semanticstructure/
  - in MySight we are more using h tags for visual differences - we aren't using them all and sometimes we skip them
  - information architecture - include how we approach alt text etc
  - maybe a good place to mention audiovisual/data vis stuff that needs special consideration in how you present that content so its accessible...eg captions, text explanantions (longdesc)

Finally...

- Motion - vestibular disorders/migraine/epilepsy/sensory processing disorders/adhd etc...also low quality/mobile devices
  just touch on prefers-reduced-motion for users who have OS setting to reduce motion (e.g. turned animation off in windows). (there is a candidate recommedation for Update media query which would allow us to check device ability to update after render) I particularly hate this site https://leedsdigitalfestival.org/, you don't have to have a disability to be just plain annoyed by it!

## so what can we take away and start doing?

Its within our gift to start...low hanging fruit

- use the right html element for the job
- keyboard nav, zoom...
- start using some sort of tool to flag potential issues as part of your development work
- building a component? look at the authoring practices, bake in accessibillity to our base components
- look for potential issues on code reviews

Resources wiki page

Some stuff is more structural - AC/Requirements/Checklists/more integrated tooling, unit or integration tests/what user groups do we prioritise?

Ideally - user testing/expert audit but manual testing is important (hard though if not an expert user of AT)
