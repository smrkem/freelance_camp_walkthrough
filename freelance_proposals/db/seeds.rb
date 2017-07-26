puts "Emptying db..."
Proposal.delete_all

puts "Creating seed Proposals..."
(1..10).each do |proposal|
  Proposal.create(
    customer: "Customer #{proposal}",
    portfolio_url: "http://example.com/portfolio_#{proposal}",
    tools: "Rails, Angular",
    estimated_hours: (80 + proposal),
    hourly_rate: 120,
    weeks_to_complete: 12,
    client_email: 'client@example.com',
  )
end

puts "All done!"
