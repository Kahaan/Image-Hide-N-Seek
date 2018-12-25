require 'test_helper'

class ImageControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get image_new_url
    assert_response :success
  end

end
