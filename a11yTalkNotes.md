# a11y

## slide 1: title and quote

## slide 2: who benefits?

but its all about ease of use so actually helps everyone

we're building public facing stuff -> more important

1 in 5 people in UK

lawsuits...dominos...no in UK unless or are a public body...but even so its just nice to do it...we want people to use our sights (lol pun) and there is an intersection with seo so...

sounds great...who could disagree

### what's stopping us?

we do it a bit but not enough and what we do is inconsistent

- it's invisible to us (obvious if css is broken, not obvious if a11y issues)
- there's a lot to consider and learn - overwhelming - different groups, different needs, standards are lengthy and dull etc

we're not alone - 61% of 1400 devs who answered a survey run by one of the devs on the Edge team do no accessibility testing https://www.gwhitworth.com/blog/2019/07/form-controls-components/

## slide 3: aims

## slide 4: principles

wcag - web content accessibility guidelines

for each principle there are guidelines with success criteria, along with sufficient and advisory techniques

https://www.w3.org/TR/WCAG21/

## slide 5: tools

- lint a11y (but styled components...)
- axe (chrome extn or integrate with Jest) : show this
- lighthouse
- nvda (or the mac built in one)
- dev tools accessibility inspector/tree: show this

tools not a panacea - don't pick up everything - eg can automate some stuff but no current way of automating screen reader tests

## slide 6: what - key areas

As I said, there's a huge amount of stuff, far more than I can cover in an hour long talk...so will cover the key areas alhtough its not exhaustive (e.g. not going to talk about concerns around video and audio content and not going to cover some stuff you probably already know like alt tags and link text)

Also none of this is meant to finger point - think we all get it right sometimes and wrong sometimes

https://reactjs.org/docs/accessibility.html - get some reacty stuff in
https://developer.mozilla.org/en-US/docs/Web/Accessibility and review this

this is good: https://www.24a11y.com/2019/what-a-year-of-learning-and-teaching-accessibility-taught-me/

## slide 7: contrast (design)
- Contrast: OK this is more design, and for some customers will be out of our controle to some extent :-) a11y for designers image https://webaim.org/resources/designers/ - obviously a lot of accessibility is rooted in the design of the page so we need to work hand in hand, even though I'm obviously gonna focus more on the dev side

## slide 8: zoom
- Zoom: responsive design can help with this, try zoom see what happens (200%)...meta tags...

## slide 9: focus management
- Focus management for interactive elements is crucial: if you use the correct focusable elements the order just happens, tabIndex = 0 if not to insert them into the tab flow

  - ...if you do outline: 0 you really should add another :focus style, this is about the easiest win there is...and if you have a div that wraps an input for formatting purposes (e.g. password input) use :focus-within

  - ...watch out for modals and things like focus getting trapped behind them, elements that are in collapsible divs (show how hide these)

  - On routing - make sure focus is cool and new stuff gets announced (spoiler: MySight is awful for this as far as my limited nvda skills can establish) - skip link? since might want to skip back to place in the nav that thy came form (can use anchor/ids cf macy sutton example)

  - brief example of using refs to manage focus but use sparingly

use this as example for the next 2 https://24ways.org/2019/making-a-better-custom-select-element/ (is cloned and in this repo)
this survey https://www.gwhitworth.com/blog/2019/07/form-controls-components/ shows the select element is a particular point of pain with 42% of web devs saying they've needed to recreate it themelevs due to the limitations of the inbuilt one
...also can I add some semantics/landmarks and a save button to demo that and aria announcements as part of same example

## slide 10: keyboard nav
- Keyboard nav: there are patterns and they are set out in https://www.w3.org/TR/wai-aria-practices-1.1/ - show how this example mapps to this

## slide 11: semantic html and aria
- Semantic html...only if can't, use aria
  - https://www.w3.org/TR/using-aria/
  - https://www.w3.org/TR/wai-aria-practices-1.1/ : No aria better than bad aria - eg the broken promise of role="button"...e.g add a role to table will override the table smenatics with that role...
  webAIM million: sites with aria more likely to have accessibility issues!!
  - can i include aria live regions/announcements for AT users? eg say its submitting

Mostly aria supports screen readers (along with speech recognition eg dragon) and getting that right is certainly not a low hanging fruit - realistically, the steep learning curve means need expert users to test and there's a moderate time investment involved in fully understanding aria...

## slide 12: structure and landmarks
- structure/landmarks...https://www.w3.org/TR/wai-aria-practices/examples/landmarks/index.html or https://webaim.org/techniques/semanticstructure/
  - in MySight we are more using h tags for visual differences - we aren't using them all and sometimes we skip them
  - information architecture - include how we approach alt text etc
  - maybe a good place to mention audiovisual/data vis stuff that needs special consideration in how you present that content so its accessible...eg captions, text explanantions (longdesc)

Page structure and good html are also important for seo...

Finally...

## slide 13: motion
- Motion - vestibular disorders/migraine/epilepsy/sensory processing disorders/adhd etc...also low quality/mobile devices
  just touch on prefers-reduced-motion for users who have OS setting to reduce motion (e.g. turned animation off in windows). (there is a candidate recommedation for Update media query which would allow us to check device ability to update after render) I particularly hate this site https://leedsdigitalfestival.org/, you don't have to have a disability to be just plain annoyed by it!

## slide 14: list them again!

## slide 15: so what can we take away and start doing?

Its within our gift to start...low hanging fruit (slide)

Resources wiki page

Some stuff is more structural - AC/Requirements/Checklists/more integrated tooling, unit or integration tests/what user groups do we prioritise?
Some stuff is just harder...e.g. time to learn screen reader and researching how to best implement this stuff...Ideally - user testing/expert audit but manual testing is important (hard though if not an expert user of AT)
