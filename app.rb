require 'sinatra/base'
require 'sinatra/json'
require 'json'

class Server < Sinatra::Base
  enable :sessions
  set :sessions, true
  set :public_folder, File.dirname(__FILE__)
  set :views, File.dirname(__FILE__)

  get "/" do
    File.read('index.html')
  end

  post '/temperature' do
    headers 'Access-Control-Allow-Origin' => '*'
    content_type :json

    $temperature = params[:temperature]
    $city = params[:city]

    p "TEMP = "
    p params[:temperature].to_i
    p "CITY = "
    p params[:city]
  end

  get '/temperature' do
    headers 'Access-Control-Allow-Origin' => '*'
    content_type :json
    {'city'=>$city, 'temperature'=>$temperature}.to_json
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
