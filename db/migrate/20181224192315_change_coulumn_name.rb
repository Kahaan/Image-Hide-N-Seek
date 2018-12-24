class ChangeCoulumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :images, :Created_by, :user_id
    rename_column :images, :Caption, :caption
    rename_column :images, :Comments, :comments
  end
end
