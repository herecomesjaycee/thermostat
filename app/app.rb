require 'sinatra/base'
require 'sinatra/json'
require 'json'

class Server < Sinatra::Base
  get '/' do
    'Hello Server!' 
  end

post '/temperature' do
	# $temperature = params[:temperature]
	# $city = params[:city]
	puts request.body.read
end

# get '/temperature' do
# 	$temperature 
# 	$city
# end
  # get '/index.html' do
  # 	$temperature = nil

  # end

   # get '/temperature.json' do
   # 	content_type :json
  # 	  @temperature =params[:temperature]
  # 	  @city = params =params[:city]
	 # #{:city => params[:city], :temperature => params[:temperature}.to_json
  # end

  # post '/temperature'




  # post '/temperature.json', :provides =>:json do
  # data = JSON.parse params
  # data.to_json	
  # end

  # put '/temperature/:id'


  # start the server if ruby file executed directly
  run! if app_file == $0
end
