require_relative '../lib/image.rb'


img = ImageManipulator.new('../IronMonkey.png')

img.encode('Random message 2')

img.decode_message
