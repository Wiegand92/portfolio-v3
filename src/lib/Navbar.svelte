<script lang='ts'>
    import {page} from '$app/stores'
    type ClickFuntion = () => void
    export let clickHandler: undefined | ClickFuntion
    $: path = $page.url.pathname
</script>
<nav class="container">
    <a href='/' on:click={clickHandler} class={path === '/' ? 'active' : ''}>About</a>
    <a href='/projects' on:click={clickHandler} class={path.includes('projects') ? 'active' : ''}>Projects</a>
    <a href='/resume' on:click={clickHandler} class={path.includes('resume') ? 'active' : ''}>Resume</a>
    <a href='/contact' on:click={clickHandler} class={path.includes('contact') ? 'active' : ''}>Contact Me</a>
</nav>
<style>
    .container{
        display: flex;
        flex-direction: column;
        background-color: var(--orange);
        justify-content: space-around;
        align-items: center;
        height: 100%;
    }
    a{
        font-size: 2rem;
        color: var(--silver);
    }
    .active{
        color: var(--blue)
    }
    @media screen and (min-width: 768px){
        .container{background: linear-gradient(to bottom right, var(--purple), var(--black));}
        /* .container{
            height: 100%;
            width: 10rem;
        } */
    }
</style>