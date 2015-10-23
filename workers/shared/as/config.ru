require 'bundler/setup'
require 'sinatra/base'

# The project root directory
$root = __dir__

class StaticServer < Sinatra::Base
  after do
    headers['Access-Control-Allow-Origin'] = '*'
  end

  get(/.+/) do
    send_sinatra_file(request.path) {404}
  end

  def send_sinatra_file(path, &missing_file_block)
    file_path = File.join(__dir__, path)
    file_path = File.join(file_path, 'index.html') unless file_path =~ /\.[a-z]+$/i
    File.exist?(file_path) ? send_file(file_path) : missing_file_block.call
  end
end

run StaticServer