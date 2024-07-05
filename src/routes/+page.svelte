<!-- src/routes/+page.svelte -->
<script lang="ts">
    export let data;
    // Do things with data.posts such as sorting, filtering, etc.
</script>

<div>
    {#each data.posts as post}
        <a href={post.path} class="text-xl font-bold">{post.metadata.title}</a>
        <p class="text-gray-600 text-sm">Published {post.metadata.date}</p>
        <p>{post.metadata.description}</p>
    {/each}
</div>
