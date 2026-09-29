<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting published git history — force pushing, or rebasing/amending/squashing commits that are already pushed — as it rewrites history on Lovable's side and the user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep this founder site as a single TanStack index route with small local components because all current content belongs to one scrolling page.
- Store editable founder and team drafts in browser localStorage because this initial scope has no connected backend and needs immediate local editing.
- Keep all visual roles in `src/styles.css` semantic tokens so the page remains consistently themeable.
