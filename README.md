# Initial Project Outline
## Requirements
We need Docs! - MDX

## Best practices to follow:
https://react.carbondesignsystem.com
https://lonelyplanet.github.io/backpack-ui/?path=/story/popovers--dialog
https://carbondesignsystem.com/components/accordion/code
https://react.carbondesignsystem.com/?path=/docs/components-accordion--accordion
https://redventures.invisionapp.com/dsm/redventures/hl-healthline/nav/5fa7cb608c01200018357549/asset/5ecea9b26f38b73b0eb8721b/tab/design?mode=preview
https://lonelyplanet.github.io/backpack-ui/?path=/story/popovers--dialog

## Storybook Documentation
Stories with args, controls, and focus on state of a component (Lazy Loading, false, true, etc)
https://storybook.js.org/docs/react/writing-stories/args

### Have a references section in each doc
Best practices
Related articles
Related examples
Related repositories
Related Sites
Have an easy input method for people to leave feedback

## Visual and automated testing
Automated Visual Testing and QA with Design and Engineer Feedback:
https://www.chromatic.com/billing?accountId=60a65d40984159003948cadc 
(Current snapshot usage limit of design system)
https://www.chromatic.com/builds?appId=60a65d76a3930600394a9661
List of build history
https://www.chromatic.com/library?appId=60a65d76a3930600394a9661
Library of existing components
https://60a65d76a3930600394a9661-fsmhnjsqdy.chromatic.com/?path=/story/textinput--with-placeholder
Cloud based example of Storybook Components

## Integration with Zeplin or Other Design Tools
https://blog.zeplin.io/connect-zeplin-with-react-and-storybook-3895b215009f

## Breakdown from Health and Wellness
#### Requirements
Put landing pages on all four sites

Health and Wellness requirements
[Requirements Doc](https://docs.google.com/spreadsheets/d/1WSINRZMc8dpTRfmK-KvqG0rvnvTK1NmZMNce9Gcky0c/edit#gid=0)

Repo: `hw-landing-pages`
The repo has `hl` and `psy` currently

#### Workflow for Repo
Merge feature branch into main and the feature will modify `hl` in Circle CI
Each site has it’s own S3 bucket

Single `node_modules` at the root
All installs at the root level based on `package.json`
Utilizes `npm` workspaces

Each site uses it’s own `next.config.js` and pulls from root `next.config.js`

Wanted each page to be data driven
What component to use for each block of JSON

### NextJS
`getStaticPaths`
`getStaticProps`

What pain point is this repo attempting to solve for?
H & W needs new pages on all our current tenants
Add new pages to Healthline
They were building new pages through Corp CMS

What about Dynamic Components?
`getServerSideProps`
Utilize API call
### Global Styles
globals  -> components -> directory -> React components
Utilizing 
`sites` directory is the site
_variables.scss
Specify site variables for each site
### Experience with Design Systems
RJ: Holy Grail long-term solution
Figma and Sketch
We can query their styles
Most modern Design tools create Components

### Pros
Ability to use clean react
Minimal number of dependencies

@redventures/eslint-config-rv
@redventures/stylelint-config-rv

### Questions
Is this repo meant to replace `frontend`?
No, this is not meant to replace the `frontend` repo

How will components translate into current `frontend` repo?
We would need to convert the components and utilize SaSS variables
Run a build command with styles for whichever approach you want to use

Where are `emotion.js` and `styled components`?
They opted to go with a very streamlined and clean version of vanilla css

What is the long-term goal?
Would like to do the style conversion to Tailwind CSS or Emotion.js
End-of-year goal
Start with something smaller such as an SVG icon library as a proof of concept
Do as much of the lift as possible so it doesn’t affect the`frontend` repo as much