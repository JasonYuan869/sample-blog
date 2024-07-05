<script lang="ts">
    export let data;

    const dateText = new Date(data.metadata.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
</script>

<article class="prose">
    <svelte:component this={data.content} />
</article>