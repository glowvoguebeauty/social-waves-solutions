import PDFDocument from 'pdfkit'
import fs from 'fs'
import path from 'path'

export async function generateCertificate(
  studentName: string,
  courseName: string,
  completionDate: Date,
  certificateId: string
): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      size: 'A4',
      layout: 'landscape',
      margin: 50,
    })

    const chunks: Buffer[] = []
    doc.on('data', chunk => chunks.push(chunk))
    doc.on('end', () => resolve(Buffer.concat(chunks)))
    doc.on('error', reject)

    // Background
    doc.rect(0, 0, doc.page.width, doc.page.height)
      .fill('#0a0a0a')

    // Border
    doc.save()
    doc.rect(30, 30, doc.page.width - 60, doc.page.height - 60)
      .stroke('#6366f1')

    // Logo placement
    doc.font('Helvetica-Bold')
      .fontSize(40)
      .fillColor('#6366f1')
      .text('SOCIAL WAVES', doc.page.width / 2 - 150, 80, { align: 'center' })
    
    doc.fontSize(20)
      .fillColor('#ffffff')
      .text('SOLUTIONS', doc.page.width / 2 - 90, 130, { align: 'center' })

    // Certificate title
    doc.fontSize(60)
      .fillColor('#ffffff')
      .text('CERTIFICATE', doc.page.width / 2 - 150, 200, { align: 'center' })
    
    doc.fontSize(24)
      .fillColor('#a1a1aa')
      .text('OF COMPLETION', doc.page.width / 2 - 100, 260, { align: 'center' })

    // Awarded to
    doc.fontSize(20)
      .fillColor('#a1a1aa')
      .text('This certificate is proudly presented to', doc.page.width / 2 - 180, 330, { align: 'center' })

    // Student name
    doc.fontSize(48)
      .fillColor('#6366f1')
      .text(studentName, doc.page.width / 2 - (studentName.length * 12), 380, { align: 'center' })

    // Course completion
    doc.fontSize(16)
      .fillColor('#a1a1aa')
      .text(`For successfully completing the course:`, doc.page.width / 2 - 180, 470, { align: 'center' })
    
    doc.fontSize(24)
      .fillColor('#ffffff')
      .text(courseName, doc.page.width / 2 - (courseName.length * 7), 510, { align: 'center' })

    // Date
    const formattedDate = completionDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
    
    doc.fontSize(14)
      .fillColor('#a1a1aa')
      .text(`Date: ${formattedDate}`, doc.page.width - 150, doc.page.height - 80)
    
    doc.fontSize(14)
      .fillColor('#a1a1aa')
      .text(`Certificate ID: ${certificateId}`, 40, doc.page.height - 80)

    // Signature
    doc.font('Helvetica')
      .fontSize(12)
      .fillColor('#a1a1aa')
      .text('Authorized Signature', doc.page.width / 2 - 80, doc.page.height - 100)
    
    doc.moveTo(doc.page.width / 2 - 100, doc.page.height - 110)
      .lineTo(doc.page.width / 2 + 100, doc.page.height - 110)
      .stroke('#6366f1')

    doc.end()
  })
}