const CODONS = {
    'AUG': 'Methionine',
    'UUU': 'Phenylalanine',
    'UUC': 'Phenylalanine',
    'UUA': 'Leucine',
    'UUG': 'Leucine',
    'UCU': 'Serine',
    'UCC': 'Serine',
    'UCA': 'Serine',
    'UCG': 'Serine',
    'UAU': 'Tyrosine',
    'UAC': 'Tyrosine',
    'UGU': 'Cysteine',
    'UGC': 'Cysteine',
    'UGG': 'Tryptophan',
    'UAA': 'STOP',
    'UAG': 'STOP',
    'UGA': 'STOP',
}

export function translate(rna) {
    let codon = ''
    const proteins = []
    let stopped = false
    for (let i = 0; i < rna?.length; i++) {
        codon += rna[i]
        if ((i + 1) % 3 == 0) {
            const protein = CODONS[codon]
            if (!protein) throw new Error('Invalid codon')
            if (protein == 'STOP') return proteins
            proteins.push(protein)
            codon = ''
        }
    }
    if (codon) throw new Error('Invalid codon')
    return proteins
}

