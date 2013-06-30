guard 'compass' do
  watch(%r{^assets/scss/(.*)\.s[ac]ss})
end

guard 'coffeescript', :output => 'public/javascripts/compiled' do
  watch(%r{^assets/coffeescripts/(.*)\.coffee})
end

guard :livereload do
  watch(%r{^views/.+\.(haml)$})
end
