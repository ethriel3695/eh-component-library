# Component Library and Design System

## Involvement of the team
Dustin and Darrell

Present when something is built

### Questions
Low level components and do we really have to get that granular?

#### Ideas
Label is inside the input field component vs outside
Error handling is inside the input field component vs outside

### Examples

Bootstrap has examples of breaking down into Components
Tailwind CSS has examples of breaking down into Components

### Benny Gems
We don’t have to solve for everything

### Kon-Kon Timeline
- Upgrade Storybook all the way
    - Done
- Integrate Chromatic
- Have all the components that we already have
    - Which ones can we standardize
    - This is the library that we use for future mocks
    - Move components that make sense
- Snapshot tests
- Unit tests
- Integration tests

### Action Items

1. Make a list of initial components that we want to port from `frontend`
    1. We will identify the components and turn it into ticket form
2. Research best practices - (Salesforce, Lonely Planet, Carbon Design)
3. Document Project Initial Setup
4. Document Project Structure
5. Document CSF Story format
6. Document CSF Jest Test format
7. Decide on best practices for base styling
8. SPIKE: create an npm package


1. Identify the different variants and where we can simplify our component list
    1. What I mean by that is how many versions of a button or optimized image do we have and could we just have one or two?
    2. This happens because of AB testing
        1. Stakeholders come and go and the design team changes so the components change
        2. The variant wins and we don’t update the component
2. Style guide
    1. Where do we put the styles (inline-css, external file. Etc)
    2. Where do the global styles live (font, colors, styled components)

### Action Plan to move forward
1. What do we want to work on as a group?
    1. We continue with the plan of testing out a small component library repo
    2. The first deliverable is to export components from the repo as a package: Kon-Kon
    3. Import the component into the frontend