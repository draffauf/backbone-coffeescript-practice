require 'rubygems'
require 'sinatra'
require 'haml'
require './lib/render_partial'

# Set Sinatra variables
set :app_file, __FILE__
set :root, File.dirname(__FILE__)
set :views, 'views'
set :public_dir, 'public'
set :haml, {:format => :html5}

# Application routes
get '/' do
  haml :"index", layout: :"application"
end
