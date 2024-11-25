task :serve do
  sh "bundle exec jekyll s --watch --incremental --future -V -P 4001"
end

task :build do
  sh "bundle exec jekyll build --future -V"
end

task :build do
  sh "jekyll build"
  cp "_site/_pages/404.html", "_site/404.html" if File.exist?("_site/_pages/404.html")
end

task deploy: [ :build ] do
  sh "npx gh-pages -d _site"
end