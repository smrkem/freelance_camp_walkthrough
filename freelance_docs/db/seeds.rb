puts "Setting up the db..."

puts "Clearing out existing data..."
FreelanceDocument.delete_all

puts "Creating initial FreelanceDocuments"
FreelanceDocument.create!(
  title: "Website Questionnaire",
  description: "A questionnaire for business owners that helps determine the initial direction and site requirements. What kind of feel are they going for? What are their content and functionality needs? A getting started point.",
  file_url: "https://s3.amazonaws.com/ms-freelancecamp/docs/WebsiteQuestionnare.pdf",
  image_url: "https://s3.amazonaws.com/ms-freelancecamp/images/website-questionnaire.png"
)

FreelanceDocument.create!(
  title: "Contract Template",
  description: "A generic contract template for a web development and design project. Casual and modern feel, but still covers all the bases. Taken with appreciation from malarkey's Contract Killer at https://gist.github.com/malarkey/4031110.",
  file_url: "https://s3.amazonaws.com/ms-freelancecamp/docs/ContractTemplate.pdf",
  image_url: "https://s3.amazonaws.com/ms-freelancecamp/images/contract-template.png"
)

FreelanceDocument.create!(
  title: "Invoice Template",
  description: "My invoice template. It's straight up and clear. Just replace the date, principal name and project details and line items.",
  file_url: "https://s3.amazonaws.com/ms-freelancecamp/docs/InvoiceTemplate.pdf",
  image_url: "https://s3.amazonaws.com/ms-freelancecamp/images/invoice-template.png"
)

puts "All done!!!"
