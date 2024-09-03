# 11ty-gallery

Requires fast-glob

`npm install fast-glob`

A way to automatically sort your images based on year and month in 11ty

# How to use

It is organized to be a plug and play into the 11ty base blog. I'm not sure how to get it to work if your folder structure is different, so please bear with me! If my explanations are confusing, just look through the files and see how it's laid out.

- Install fast-glob with to your 11ty root `npm install fast-glob`
- Add `eleventyConfig.addPassthroughCopy("content/gallery");` to your eleventy config's `module.export`.
- Check line 7 in gallery.11tydata.js to make sure you have all the years you need.
- Customize galleryIndex.njk to fit your site's theming!
- Add folders for each month you need, **make sure to name the months by the number!**
- Drop your images in to month folders

It will automatically rename the months from numbers to month names. Your folder named 1 will be ranemed to January.
If you would like to change what the months get renamed to, you can change `monthsList` in `gallery.njk`.
