rm -rf ./_site
htmlproofer ./_site --disable-external --alt-ignore '/.*/' --url-ignore "/#.*/"
jekyll serve --incremental
