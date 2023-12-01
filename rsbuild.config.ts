import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [pluginReact()],
  tools: {
    // postcss(config){
    //   config.postcssOptions = config.postcssOptions ?? {};
    //   config.postcssOptions.plugins = config.postcssOptions.plugins ?? []
    //   config.postcssOptions.plugins.push(tailwindcss);
    // }
    postcss: {
      postcssOptions: {
        plugins: [tailwindcss]
      }
    }
  }
});
