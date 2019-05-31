<template>
    <div class="container">
        <header>
            <Content slot-key="header"/>
        </header>
        <main>
            <Content slot-key="tip"/>
            <Content/>
        </main>
        <footer>
            <Content slot-key="footer"/>
        </footer>
    </div>
</template>