import preprocess from 'svelte-preprocess';
/**@type {import('@sveltejs/kit').Config} */
export default{
    compilerOptions:{
        customElement:true
    },
    onwarn:(warning,handler)=>{
        if(warning.code.startsWith('a11y-')){
            return;
        }
        handler(warning)
    },
    preprocess:preprocess()
}
