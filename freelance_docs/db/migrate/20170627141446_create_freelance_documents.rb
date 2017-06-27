class CreateFreelanceDocuments < ActiveRecord::Migration[5.1]
  def change
    create_table :freelance_documents do |t|
      t.string :title
      t.text :description
      t.text :file_url
      t.text :image_url

      t.timestamps
    end
  end
end
