require 'sinatra/base'
require 'sinatra/json'
require 'json'

class Server < Sinatra::Base
  enable :sessions

  get '/' do
    'Hello Server!'
  end

  post '/temperature/' do
    session[:temperature] = params[:temperature]
    session[:city] = params[:city]
  end

  get '/temperature/' do
    headers 'Access-Control-Allow-Origin' => '*'
    session[:temperature] || 20 # = params[:temperature].to_f
    # session[:city] = params[:city]
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
