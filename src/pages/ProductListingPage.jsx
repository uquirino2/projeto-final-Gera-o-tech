import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from './Layout';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import FilterGroup from '../components/FilterGroup';
import { filterOptions, products } from '../data/products';
import './ProductListingPage.css';

function ProductListingPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryFilter = searchParams.get('filter') || '';

  const [sortBy, setSortBy] = useState('relevance');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedGenders, setSelectedGenders] = useState([]);
  const [selectedCondition, setSelectedCondition] = useState('');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    document.title = queryFilter
      ? `Digital Store | Busca: ${queryFilter}`
      : 'Digital Store | Produtos';
  }, [queryFilter]);

  function toggleArrayValue(list, setList, value) {
    setList((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  }

  function handleClearFilters() {
    setSelectedBrands([]);
    setSelectedCategories([]);
    setSelectedGenders([]);
    setSelectedCondition('');
    setSortBy('relevance');
    if (queryFilter) {
      setSearchParams({});
    }
  }

  const filteredProducts = useMemo(() => {
    const normalizedQuery = queryFilter.trim().toLowerCase();

    const filtered = products.filter((product) => {
      if (normalizedQuery) {
        const searchableText = [
          product.name,
          product.brand,
          product.category,
          product.subCategory,
          product.gender,
          product.condition,
        ]
          .join(' ')
          .toLowerCase();

        if (!searchableText.includes(normalizedQuery)) {
          return false;
        }
      }

      if (
        selectedBrands.length > 0 &&
        !selectedBrands.includes(product.brand)
      ) {
        return false;
      }

      if (
        selectedCategories.length > 0 &&
        !selectedCategories.includes(product.subCategory)
      ) {
        return false;
      }

      if (
        selectedGenders.length > 0 &&
        !selectedGenders.includes(product.gender)
      ) {
        return false;
      }

      if (selectedCondition && product.condition !== selectedCondition) {
        return false;
      }

      return true;
    });

    const getEffectivePrice = (item) =>
      typeof item.priceDiscount === 'number' ? item.priceDiscount : item.price;

    if (sortBy === 'price-asc') {
      return [...filtered].sort(
        (a, b) => getEffectivePrice(a) - getEffectivePrice(b)
      );
    }

    if (sortBy === 'price-desc') {
      return [...filtered].sort(
        (a, b) => getEffectivePrice(b) - getEffectivePrice(a)
      );
    }

    return filtered;
  }, [
    queryFilter,
    selectedBrands,
    selectedCategories,
    selectedGenders,
    selectedCondition,
    sortBy,
  ]);

  const hasActiveFilters =
    Boolean(queryFilter) ||
    selectedBrands.length > 0 ||
    selectedCategories.length > 0 ||
    selectedGenders.length > 0 ||
    Boolean(selectedCondition);

  const countText =
    filteredProducts.length === 1
      ? '1 produto encontrado'
      : `${filteredProducts.length} produtos encontrados`;

  const sectionTitle = queryFilter
    ? `Resultados para "${queryFilter}" - ${countText}`
    : countText;

  return (
    <Layout>
      <div className="container listing-page">
        <div className="listing-mobile-bar">
          <button
            type="button"
            className="mobile-filter-toggle"
            onClick={() => setMobileFiltersOpen((prev) => !prev)}
          >
            {mobileFiltersOpen ? 'Fechar filtros' : 'Filtrar e ordenar'}
          </button>
        </div>

        <div className="listing-layout">
          <aside className={`listing-sidebar ${mobileFiltersOpen ? 'open' : ''}`}>
            <div className="sort-box">
              <label htmlFor="sort-products" className="sort-label">
                Ordenar por
              </label>
              <select
                id="sort-products"
                className="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="relevance">Mais relevantes</option>
                <option value="price-asc">Menor preço</option>
                <option value="price-desc">Maior preço</option>
              </select>
            </div>

            <div className="filter-panel">
              <div className="filter-panel-header">
                <h2 className="filter-panel-title">Filtrar por</h2>
                {hasActiveFilters && (
                  <button
                    type="button"
                    className="clear-filters-link"
                    onClick={handleClearFilters}
                  >
                    Limpar
                  </button>
                )}
              </div>

              <hr className="filter-panel-divider" />

              <FilterGroup
                title="Marca"
                inputType="checkbox"
                options={filterOptions.brands}
                selected={selectedBrands}
                onChange={(val) =>
                  toggleArrayValue(selectedBrands, setSelectedBrands, val)
                }
              />

              <FilterGroup
                title="Categoria"
                inputType="checkbox"
                options={filterOptions.categories}
                selected={selectedCategories}
                onChange={(val) =>
                  toggleArrayValue(
                    selectedCategories,
                    setSelectedCategories,
                    val
                  )
                }
              />

              <FilterGroup
                title="Gênero"
                inputType="checkbox"
                options={filterOptions.genders}
                selected={selectedGenders}
                onChange={(val) =>
                  toggleArrayValue(selectedGenders, setSelectedGenders, val)
                }
              />

              <FilterGroup
                title="Estado"
                inputType="radio"
                name="estado"
                options={filterOptions.conditions}
                selected={selectedCondition}
                onChange={(val) => setSelectedCondition(val)}
              />
            </div>
          </aside>

          <div className="listing-content">
            <h1 className="sr-only">Listagem de Produtos</h1>

            <Section title={sectionTitle} titleAlign="left">
              {filteredProducts.length > 0 ? (
                <ProductListing products={filteredProducts} columns={3} />
              ) : (
                <div className="empty-results">
                  <h3>Nenhum produto encontrado</h3>
                  <p>
                    Tente ajustar os filtros selecionados ou buscar por outro
                    termo.
                  </p>
                  <button
                    type="button"
                    className="empty-results-btn"
                    onClick={handleClearFilters}
                  >
                    Ver todos os produtos
                  </button>
                </div>
              )}
            </Section>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProductListingPage;
